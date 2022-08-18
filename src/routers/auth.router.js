const  { verifyEmailAndMobile, generateTotpSecret, enableTotp, verifyTotpToken } = require('./../controllers/auth.controller');
const express = require("express");

const router = new express.Router();

router.post('/verify/otp', verifyEmailAndMobile);

router.get('/totp/:id', generateTotpSecret);

router.put('/totp/:id', enableTotp);

router.post('/totp/:id', verifyTotpToken);

module.exports = router;