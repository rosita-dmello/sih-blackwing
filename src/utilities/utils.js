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
    password = bcrypt.hashSync(password, 8); 
    return password;
}

const validatePassword = (password, hashPassword) => {
    const verify = bcrypt.compareSync(password, hashPassword);
    return verify;
}

module.exports = { 
    generateOtp,
    hashPassword,
    validatePassword
};