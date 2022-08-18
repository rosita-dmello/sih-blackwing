const User = require('./../models/user.schema');
const { hashPassword } = require('./../utilities/utils');
const { sendOtpByEmail, sendOtpBySms } = require('./auth.service');

const createUser = async (req, user, role) => {
    let result;
    const password = await hashPassword(req.body.password);

    const newUserObj = {
        parentid: user._id,
        name: user.companyName,
        email: user.email,
        mobile: user.mobile,
        role: role,
        password: password,
        istotpenabled: false,
        isEmailVerified: false,
        isMobileVerified: false
    };
    
    let newUser = new User(newUserObj);
    newUser = await newUser.save();

    const authEmailId = await sendOtpByEmail(req, newUser);
    const authSmsId = await sendOtpBySms(req, newUser);

    result = {
        newUser,
        authEmailId,
        authSmsId
    };
    return result;
};

module.exports = createUser;
