const bcrypt = require('bcryptjs');

const generateOtp = (otpLength) => {
    let digits = "0123456789";
    let otp = "";
    for (let i = 0; i < otpLength; i++) {
        otp += digits[Math.floor(Math.random()*10)];
    }
    return otp;
};

const hashPassword = (password) => {
    password = bcrypt.hash(password, 8); 
    return password;
}

module.exports = { 
    generateOtp,
    hashPassword
};