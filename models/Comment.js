const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/** Comment Schema */


var commentSchema = new Schema({
    title: String,
    commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    comments: [{
        text: String,
        commentedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    }]
});

module.exports = mongoose.model('comments', commentSchema);