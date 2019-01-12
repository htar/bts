const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import userStatus from '../helpers/userStatus';
import userRoles from '../helpers/userRoles';

/** User Schema */
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true,
        index: {
            unique: true
        },
        match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/],
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    emailConfirmHash: {
        type: String,
    },
    status: {
        type: String,
        lowercase: true,
        enum: userStatus,
        default:'pending'
    },
    role: {
        type: String,
        lowercase: true,
        enum: userRoles,
        default:'guest'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('users', userSchema);