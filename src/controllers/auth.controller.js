const { sendOtpByEmail, sendOtpBySms, emailAndMobileVerification } = require('./../services/auth.service');
const speakeasy = require('speakeasy');

const verifyEmailAndMobile = async (req, res) => {
    try {
        const result = await emailAndMobileVerification(req);

        if (result.error) {
            res.status(400).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const generateSecret = async (req, res) => {
    const tempSecret = speakeasy.generateSecret(); 
};

const registerSecret = async (req, res) => {
    
};

const verifyToken = async (req, res) => {

};

module.exports = verifyEmailAndMobile;