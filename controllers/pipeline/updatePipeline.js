const Pipeline = require('../../models/Pipeline');
const {  errorHandler } = require('../../utils');

async function updatePipeline(req, res) {
    try {
        const pipeline = await Pipeline.findOneAndUpdate({
            _id: req.params.pipelineId
        }, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(pipeline);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updatePipeline(req, res);
};