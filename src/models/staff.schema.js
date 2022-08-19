const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
    {
        parentid: {
            type: String,
            required: true
        },
        title: {
            type: String,
            require: true,
            enum: ['Mrs', 'Mr', 'Ms', 'Dr', 'Sri']
        },
        firstname: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            trim: true
        },
        dateofbirth: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please enter a valid email address']
        },
        secretariatdepartment: {
            type: String
        },
        organizationname: {
            type: String
        },
        departmentcircle: {
            type: String
        },
        designation: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['DEPARTMENT_HEAD', 'DEPARTMENT_STAFF']
        },
        isdeleted: {
            type: Boolean,
            default: false
        }
    }
)