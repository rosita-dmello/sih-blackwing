const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false
    }
});

const Department = mongoose.model('department', departmentSchema);

module.exports = Department;