const Staff = require('./../models/staff.schema');
const { createUser } = require('./user.service');

const staffList = async (req) => {
    let result;
    let staffs;

    const staff = await Staff.findById(req.parentId);
    const queryObj = { isdeleted: false, parentid: staff.parentid };

    let aggregationPipeline = [];

    aggregationPipeline.push({ $match: queryObj });

    staffs = await Staff.aggregate(aggregationPipeline).collation({ locale: 'en_US' });

    result = {
        message: 'Staff List',
        data: {
            staffs
        }
    };
    return result;
}

const staffById = async (req) => {
    let result;

    const staff = await Staff.findById(req.params.id);

    if (!staff) {
        result = {
            message: 'Staff not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Staff details',
        data: {
            staff
        }
    };
    return result;
}

const staffCreate = async (req) => {
    let result;
    let newStaff = new Staff(req.body);
    newStaff = await newStaff.save();

    const newUser = await createUser(req, newStaff, req.body.role);

    result = {
        message: 'Staff successfully created',
        data: { 
            authEmailId: newUser.authEmailId,
            authSmsId:  newUser.authSmsId,
            newStaff,
            newUser:  newUser.newUser
        }
    };
    return result;
};

const staffUpdate = async (req) => {
    let result;

    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body);

    if (!staff) {
        result = {
            message: 'Staff not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Staff updated successfully',
        data: staff
    };
    return result;
};

const staffDelete = async (req) => {
    let result;

    const staff = await Staff.findByIdAndUpdate(req.params.id, { isDeleted: true });

    if (!staff) {
        result = {
            message: 'Staff not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Staff deleted successfully',
        data: staff
    };
    return result;
};

module.exports = {
    staffList,
    staffById,
    staffCreate,
    staffUpdate,
    staffDelete
};