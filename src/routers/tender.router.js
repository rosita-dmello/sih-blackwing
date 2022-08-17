const { createTender, getTenderById, getTenderList, updateTender, deleteTender } = require('./../controllers/tender.controller');
const express = require("express");

const router = new express.Router();

router.get('/', getTenderList);

router.get('/:id', getTenderById);

router.post('/', createTender);

router.put('/:id', updateTender);

router.delete('/:id', deleteTender);

module.exports = router;