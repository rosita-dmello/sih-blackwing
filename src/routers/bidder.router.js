const { createBidder, getBidderById, getBidderList, updateBidder, deleteBidder } = require('./../controllers/bidder.controller');
const express = require("express");

const router = new express.Router();

router.get('/', getBidderList);

router.get('/:id', getBidderById);

router.post('/', createBidder);

router.put('/:id', updateBidder);

router.delete('/:id', deleteBidder);

module.exports = router;