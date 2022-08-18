const { sendOtpByEmail, sendOtpBySms, emailAndMobileVerification, totpSecretGenerate, totpEnable, totpTokenVerify } = require('./../services/auth.service');

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

const generateTotpSecret = async (req, res) => {
    try {
        const result = await totpSecretGenerate(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const enableTotp = async (req, res) => {
    try {
        const result = await totpEnable(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const verifyTotpToken = async (req, res) => {
    try {
        const result = await totpTokenVerify(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

module.exports =  {
    verifyEmailAndMobile,
    generateTotpSecret,
    enableTotp,
    verifyTotpToken
};