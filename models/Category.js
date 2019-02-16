const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/** Category Schema */
const categorySchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true
    },
    project: {
        ref: 'projects',
        type: Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model('categories', categorySchema);