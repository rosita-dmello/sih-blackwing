const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createDepartment,
    updateDepartment,
    deleteDepartment
} = require('./../controllers/department.controller');

const router = new express.Router();

router.post('/', createDepartment);

router.put('/:id', updateDepartment);

router.delete('/:id', deleteDepartment);

module.exports = router;