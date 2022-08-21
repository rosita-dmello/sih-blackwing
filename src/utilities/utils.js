const bcrypt = require('bcryptjs');
const crypto = require('crypto-js');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const generateOtp = (otpLength) => {
    let digits = "0123456789";
    let otp = "";
    for (let i = 0; i < otpLength; i++) {
        otp += digits[Math.floor(Math.random()*10)];
    }
    return otp;
};

const sendEmail = async (toEmail, subject, body) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        },
        tls: {
            ciphers: "SSLv3",
        },
    });

    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to:toEmail,
        subject: subject,
        text: body
    };

    await transporter.sendMail(mailOptions);
};

const sendSms = (message, mobile) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    const client = require('twilio')(accountSid, authToken, {
        lazyLoading: true
    });

    client.messages
        .create({
            from: '+13862725859',
            to: mobile,
            body: message
        })
        .then(message => console.log(`Message SID ${message.sid}`))
        .catch(error => console.error(error));
}

const hashPassword = (password) => {
    password = bcrypt.hashSync(password, 8); 
    return password;
};

const validatePassword = (password, hashPassword) => {
    const verify = bcrypt.compareSync(password, hashPassword);
    return verify;
};

const encrypt = (data) => {
    const encryptData = crypto.AES
        .encrypt(JSON.stringify(data), process.env.CRYPTO_KEY)
        .toString();
    return encryptData;
};

const decrypt = (data) => {
    const bytes = crypto.AES.decrypt(data, process.env.CRYPTO_KE);
    const decryptData = JSON.parse(bytes.toString(crypto.enc.Utf8));
    return decryptData;
};

module.exports = { 
    generateOtp,
    sendEmail,
    sendSms,
    hashPassword,
    validatePassword,
    encrypt,
    decrypt
};