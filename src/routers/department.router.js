const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createDepartment,
    updateDepartment,
    deleteDepartment
} = require('./../controllers/department.controller');

const router = new express.Router();

router.post('/', [auth.userTypeAdmin], createDepartment);

router.put('/:id', [auth.userTypeAdmin], updateDepartment);

router.delete(':id', [auth.userTypeAdmin], deleteDepartment);

module.exports = router;