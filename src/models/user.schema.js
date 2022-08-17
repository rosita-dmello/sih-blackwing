const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        parentid: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        mobile: {
            type: String,
            required: true
        },
        role: {
            type: RolesEnum,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        isemailverified: {
            type: Boolean,
            default: false
        },
        ismobileverified: {
            type: Boolean,
            default: false
        },
        isdeleted: {
            type: Boolean,
            default: false
        }
    }, 
    { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;