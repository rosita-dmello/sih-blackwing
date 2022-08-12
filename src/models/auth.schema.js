const mongoose = require('mongoose');

const authUserSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bidder'
        },
        email: {
            type: String
        }
    }
);

const authSchema = new mongoose.Schema(
    {
        bidderId: {
            type: authUserSchema,
        },
        token: {
            type: String
        },
        tokenType: {
            type: String,
            enum: ['BEARER', 'EMAIL OTP', 'SMS OTP']
        },
        expireAt: {
            type: Date,
        },
        lastAccess: {
            type: Date
        },
        clientIPAddress: {
            type: String,
            required: false
        },
        userAgent: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

const Auth = mongoose.model('auth', authSchema);

module.exports = Auth;