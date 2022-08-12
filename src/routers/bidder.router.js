const { createBidder } = require('./../controllers/bidder.controller');
const express = require("express");

const router = new express.Router();

router.post('/', createBidder);

module.exports = router;