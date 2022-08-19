const Department = require('../models/department.schema');

const departmentCreate = async (req) => {
    let result;
    let newDepartment = new Department(req.body);

    newDepartment = await newDepartment.save();

    result = {
        message: 'Department created successfully',
        data: {
            newDepartment
        }
    };
    return result;
}

const departmentUpdate = async (req) => {
    let result;

    const department = await Department.findByIdAndUpdate(req.params.id, req.body);

    if (!department) {
        result = {
            message: 'Department not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Department updated successfully',
        data: department
    };
    return result;
}

const departmentDelete = async (req) => {
    let result;

    const department = await Department.findByIdAndUpdate(req.params.id, { isDeleted: true });

    if (!department) {
        result = {
            message: 'Department not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Department deleted successfully',
        data: department
    };
    return result;
};

module.exports = {
    departmentCreate,
    departmentUpdate,
    departmentDelete
};