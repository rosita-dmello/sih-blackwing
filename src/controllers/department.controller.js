const {
    departmentCreate,
    departmentUpdate,
    departmentDelete
} = require('./../services/department.service');

const createDepartment = async (req, res) => {
    try {
        let result = await departmentCreate(req);

        if (result.error) {
            res.status(400).json({ result });
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

const updateDepartment = async (req, res) => {
    try {
        let result = await departmentUpdate(req);

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const deleteDepartment = async (req, res) => {
    try {
        let result = await departmentDelete(req);

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

module.exports = {
    createDepartment,
    updateDepartment,
    deleteDepartment
};