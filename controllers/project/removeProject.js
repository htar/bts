const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

async function removeProject(req, res) {

    const project = await Project.findById(req.params.projectId);
    if (project) {
        try {
            project.remove().then(()=>{
                res.status(200).json({
                    message:'Project removed'
                });
            });
        } catch (error) {
            errorHandler(res, error);
        }
    }else{
        res.status(404).json({
            message:'Project dont found'
        });
    }

}

module.exports = function (req, res) {
    removeProject(req, res);
};