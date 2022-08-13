const verifyEmailAndMobile = require('./../controllers/auth.controller');
const express = require("express");

const router = new express.Router();

router.post('/verify', verifyEmailAndMobile);

module.exports = router;