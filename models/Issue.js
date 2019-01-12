const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Issue Schema */

const issueSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category:{
        ref:'categories',
        type: Schema.Types.ObjectId,
    },
    status: {
        type: String,
        lowercase: true,
        enum: ['open', 'closed'],
        default:'open'
    },
    user:{
        ref:'users',
        type: Schema.Types.ObjectId,
    },
    assignUser:[{
        ref:'users',
        type: Schema.Types.ObjectId
    }],
    subscribeUser:[{
        ref:'users',
        type: [Schema.Types.ObjectId]
    }],
});

module.exports = mongoose.model('users', issueSchema);