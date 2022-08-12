const Auth = require('./../models/auth.schema');
const generateOtp = require('./../utilities/utils');
const sendEmail = require('./email.service');

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
}

module.exports = sendOtpByEmail;