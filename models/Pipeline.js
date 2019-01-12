const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Pipeline Schema */
const pipelineSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name:{
        type:String,
        required: true
    },
    project:{
        ref:'projects',
        type: Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model('pipelines',pipelineSchema);