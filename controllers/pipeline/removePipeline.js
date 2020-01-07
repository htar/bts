const Pipeline = require('../../models/Pipeline');
const {  errorHandler } = require('../../utils');

async function removePipeline(req, res) {

    const pipeline = await Pipeline.findById(req.params.pipelineId);
    if (pipeline) {
        try {
            pipeline.remove().then(()=>{
                res.status(200).json({
                    message:'Pipeline removed'
                });
            });
        } catch (error) {
            errorHandler(res, error);
        }
    }else{
        res.status(404).json({
            message:'Pipeline dont found'
        });
    }

}
module.exports = function (req, res) {
    removePipeline(req, res);
};