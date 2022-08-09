import mongoose from 'mongoose';
import { roleEnum, titleEnum } from '../enums';

const userSchema = new mongoose.Schema({
    title: {
        type: titleEnum,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    correspondenceEmail: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    designation: {
        type: String,
        required: false
    },
    role: {
        type: roleEnum,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
});

const User = mongoose.model('user', userSchema);