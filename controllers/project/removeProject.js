const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

async function removeProject(req, res) {
    try {
        await Project.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message:'Project  removed'
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    removeProject(req, res);
};