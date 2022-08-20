const bcrypt = require('bcryptjs');
const crypto = require('crypto-js');
const dotenv = require('dotenv').config();

const generateOtp = (otpLength) => {
    let digits = "0123456789";
    let otp = "";
    for (let i = 0; i < otpLength; i++) {
        otp += digits[Math.floor(Math.random()*10)];
    }
    return otp;
};

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
    hashPassword,
    validatePassword,
    encrypt,
    decrypt
};