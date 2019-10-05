const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/** Comment Schema */


var commentSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    title: String,
    commentedBy: {
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId
    },
    comments: [{
        text: String,
        commentedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    issue:{
        ref:'issues',
        type: Schema.Types.ObjectId,
    },
    project:{
        ref:'projects',
        type: Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model('comments', commentSchema);