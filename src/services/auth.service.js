const Auth = require('./../models/auth.schema');
const User = require('./../models/user.schema');
const  { generateOtp } = require('./../utilities/utils');
const sendEmail = require('./email.service');
const sendSms = require('./sms.service');

const sendOtpByEmail = async (req, user) => {
    const milliseconds = new Date().getTime();
    const lessMinute = milliseconds - (1 * 60 * 1000);
    const lessMinuteDate = new Date(lessMinute);

    const otp = generateOtp(6);
    const emailSubject = 'Verification Code';
    const emailBody = `Your verification code is ${otp}`;
    await sendEmail(user.email, emailSubject, emailBody);

    const auth = await new Auth({
        user: {
            id: user._id,
            email: user.email
        },
        token: otp,
        tokenType: 'EMAIL OTP',
        expireAt: lessMinuteDate,
        lastAccess: new Date(),               
        clientIPAddress: req.connection.remoteAddress,
        userAgent: req.headers["user-agent"]
    }).save();

    return auth._id;
};

const sendOtpBySms = async (req, user) => {
    const milliseconds = new Date().getTime();
    const lessMinute = milliseconds - (1 * 60 * 1000);
    const lessMinuteDate = new Date(lessMinute);

    const otp = generateOtp(6);
    const message = `Your verification code is ${otp}`;
    await sendSms(message, user.mobile);

    const auth = await new Auth({
        user: {
            id: user._id,
            mobile: user.mobile
        },
        token: otp,
        tokenType: 'SMS OTP',
        expireAt: lessMinuteDate,
        lastAccess: new Date(),               
        clientIPAddress: req.connection.remoteAddress,
        userAgent: req.headers["user-agent"]
    }).save();

    return auth._id;
};

const emailAndMobileVerification = async (req) => {
    let result;
    const authEmail = await Auth.findById(req.body.authEmailId);
    if (!authEmail) {
        result = {
            message: 'Email otp not found',
            error: true
        };
        return result;
    }

    const authMobile = await Auth.findById(req.body.authMobileId);
    if (!authMobile) {
        result = {
            message: 'Mobile otp not found',
            error: true
        };
        return result;
    }

    let user = await User.findById(authEmail.user.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: true
        };
        return result;
    }

    if (authEmail.token !== req.body.emailOtp) {
        result = {
            message: 'Incorrect email otp',
            error: true
        };
        return result;
    } 

    if (authMobile.token !== req.body.mobileOtp) {
        result = {
            message: 'Incorrect mobile otp',
            error: true
        };
        return result;
    } 

    user = await User.findByIdAndUpdate(user.id, { isemailverified: true, ismobileverified: true });

    result = {
        message: 'Verifcation Successful',
        data: {
            user
        }
    };
    return result;
};

const totpSecretGenerate = async (req) => {
    let result;
    const user = await User.findById(req.params.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: 404
        };
        return result;
    }
    
    const tempSecret = speakeasy.generateSecret();
    
    await User.findByIdAndUpdate(req.params.id, { totpsecret: tempSecret.base32 });

    result = {
        message: 'Secret generated',
        data:  {
            url: tempSecret.otpauth_url
        }
    }
    return result
};

const totpEnable = async (req) => {
    let result;
    const user = await User.findById(req.params.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: 404
        };
        return result;
    }

    const verify = speackeasy.totp.verify({
        secret: user.secret,
        encoding: 'base32',
        token: req.body.token
    });

    if (!verify) {
        result = {
            message: 'Invalid token',
            error: 400
        };
    }
    
    await User.findByIdAndUpdate(req.params.id, { istotpenabled: true });
    result = {
        message: 'Token verified',
        user: user
    };
    return result;
};

const totpTokenVerify = async (req) => {
    let result;
    const user = await User.findById(req.params.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: 404
        };
        return result;
    }

    const verify = speackeasy.totp.verify({
        secret: user.secret,
        encoding: 'base32',
        token: req.body.token
    });

    if (!verify) {
        result = {
            message: 'Invalid token',
            error: 400
        };
    }

    result = {
        message: 'Token verified',
        user: user
    };
    return result;
};

module.exports = {
    sendOtpByEmail,
    sendOtpBySms,
    emailAndMobileVerification,
    totpSecretGenerate,
    totpEnable,
    totpTokenVerify
};