const Auth = require('./../models/auth.schema');
const Bidder = require('./../models/bidder.schema');
const generateOtp = require('./../utilities/utils');
const sendEmail = require('./email.service');
const sendSms = require('./sms.service');

const sendOtpByEmail = async (req, bidder) => {
    const milliseconds = new Date().getTime();
    const lessMinute = milliseconds - (1 * 60 * 1000);
    const lessMinuteDate = new Date(lessMinute);

    const otp = generateOtp(6);
    const emailSubject = 'Verification Code';
    const emailBody = `Your verification code is ${otp}`;
    await sendEmail(bidder.email, emailSubject, emailBody);

    const auth = await new Auth({
        user: {
            id: bidder._id,
            email: bidder.email
        },
        token: otp,
        tokenType: 'EMAIL OTP',
        expireAt: lessMinuteDate,
        lastAccess: new Date(),               
        clientIPAddress: req.connection.remoteAddress,
        userAgent: req.headers["user-agent"]
    }).save();

    return {
        authId: auth._id
    };
};

const sendOtpBySms = async (req, bidder) => {
    const milliseconds = new Date().getTime();
    const lessMinute = milliseconds - (1 * 60 * 1000);
    const lessMinuteDate = new Date(lessMinute);

    const otp = generateOtp(6);
    const message = `Your verification code is ${otp}`;
    await sendSms(message, bidder.mobile);

    const auth = await new Auth({
        user: {
            id: bidder._id,
            mobile: bidder.mobile
        },
        token: otp,
        tokenType: 'SMS OTP',
        expireAt: lessMinuteDate,
        lastAccess: new Date(),               
        clientIPAddress: req.connection.remoteAddress,
        userAgent: req.headers["user-agent"]
    }).save();

    return {
        authId: auth._id
    };
};

const emailAndMobileVerification = async (req) => {
    let result;
    const authEmail = await Auth.findById(req.body.authEmailId);
    if (!authEmail) {
        result = {
            message: 'Email otp not found',
            error: true
        };
        return;
    }

    const authMobile = await Auth.findById(req.body.authMobileId);
    if (!authMobile) {
        result = {
            message: 'Mobile otp not found',
            error: true
        };
        return;
    }

    let bidder = await Bidder.findById(authEmail.user.id);
    if (!bidder) {
        result = {
            message: 'Bidder not found',
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

    bidder = await Bidder.findByIdAndUpdate(bidder._id, { isEmailVerified: true, isMobileVerified: true });

    result = {
        message: 'Verifcation Successful',
        data: {
            bidder
        }
    };
    return result;
};

module.exports = {
    sendOtpByEmail,
    sendOtpBySms,
    emailAndMobileVerification
};