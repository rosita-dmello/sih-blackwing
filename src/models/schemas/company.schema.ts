import mongoose from 'mongoose';
import { preferenceCategoryEnum, bidderTypeEnum, legalStatusEnum, companyCategoryEnum } from '../enums';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prefrentialBidder: {
        type: Boolean,
        required: false
    },
    preferenceCategory: {
        type: preferenceCategoryEnum,
        required: false,
    },
    registrationNo: {
        type: String,
        required: true
    },
    registeredAddress: {
        type: String,
        required: true
    },
    partners: {
        type: [String],
        required: false
    },
    bidderType: {
        type: bidderTypeEnum,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: false,
        min: [10, 'PAN/TAN number must have 10 characters.'],
        max: [10, 'PAN/TAN number must have 10 characters.']
    },
    establishmentYear: {
        type: String,
        required: false
    },
    natureOfBusiness: {
        type: String,
        required: true
    },
    legalStatus: {
        type: legalStatusEnum,
        required: true
    },
    companyCategory: {
        type: companyCategoryEnum,
        required: true
    },
})