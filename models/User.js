const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userStatus = require('../helpers/userStatus');
const userRoles = require('../helpers/userRoles');

/** User Schema */
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: {
            unique: true
        },
        match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/],
    },
    username: {
        type: String,
        required: true,
        // unique:true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
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
        default: 'pending'
    },
    role: {
        type: String,
        lowercase: true,
        enum: userRoles,
        default: 'guest'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    date: {
        type: Date
    },
});


/**
 * Methods
 */
userSchema.method({});

/**
 * Statics
 */
userSchema.statics = {};


module.exports = mongoose.model('users', userSchema);