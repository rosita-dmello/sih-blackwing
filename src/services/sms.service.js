const fast2sms = require("fast-two-sms");
const dotenv = require('dotenv').config();

const sendSms = async (message, contactNumber) => {
    const options = {
        authorization: process.env.FAST2SMS_API_KEY,
        message: message,
        numbers: [contactNumber]
    };
    
    await fast2sms.sendMessage(options);
};

module.exports = sendSms;