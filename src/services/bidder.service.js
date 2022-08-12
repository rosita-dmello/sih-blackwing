const Bidder = require('../models/bidder.schema');
const sendOtpByEmail = require('./auth.service');
const verifyGstin = require('./verification.service');

const bidderCreate = async (req) => {
    let result;
    const newBidder = new Bidder(req.body);
    
    let information = true;
    const panVerification = 1;
    const gstinVerfication = await verifyGstin(newBidder.gstinNumber);

    if (!panVerification) {
        result = {
            message: 'Enter correct PAN'
        }
        information = false;
    }
    if (!gstinVerfication) {
        result = {
            message: 'Enter correct GSTIN'
        }
        information = false;
    }
    if (!panVerification && !gstinVerfication) {
        result = {
            message: 'Enter correct PAN & GSTIN'
        }
        information = false;
    }
    if (!information) {
        return result;
    }

    await newBidder.save(req);

    const authId = await sendOtpByEmail(req, newBidder);

    result = {
        message: 'Bidder successfully created',
        data: { 
            authId,
            newBidder
        }
    };
    return result;
};

module.exports = bidderCreate;