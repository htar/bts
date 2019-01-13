const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/** Project Schema */
const projectSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        default: ''
    },
    list: [{
        name: {
            type: String,
        },
        quantity: {
            type: Number,
        }
    }],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },

});

module.exports = mongoose.model('projects', projectSchema);