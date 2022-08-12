const fast2sms = require("fast-two-sms");
const dotenv = require('dotenv').config();

// Generating OTP
const generateOTP = (otpLength) => {
    let digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < otpLength; i++) {
        OTP += digits[Math.floor(Math.random()*10)];
    }
    return OTP;
};

// Sending OTP via SMS
const sendOTP = async ({ message, contactNumber}) => {
    try {
        const res = await fast2sms.sendMessage({
            authorization: process.env.FAST2SMS_API_KEY,
            message,
            numbers: [contactNumber]
        });
        console.log(res);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error);
    }
};

module.exports = {
    generateOTP,
    sendOTP
}