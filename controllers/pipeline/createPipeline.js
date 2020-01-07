const Pipeline = require('../../models/Pipeline');
const {  errorHandler } = require('../../utils');

async function createPipeline(req, res) {
    try {
        const pipeline = await new Pipeline({
            name:req.body.name,
            project:req.body.projectId,
    
        }).save();
        res.status(201)
            .json(pipeline);
    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    createPipeline(req, res);
};