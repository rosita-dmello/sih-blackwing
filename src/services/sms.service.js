const fast2sms = require("fast-two-sms");
const dotenv = require('dotenv').config();

const sendSms = async ({ message, contactNumber}) => {
    await fast2sms.sendMessage({
        authorization: process.env.FAST2SMS_API_KEY,
        message,
        numbers: [contactNumber]
    });
};

module.exports = sendSms;