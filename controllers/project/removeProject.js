const Project = require('../../models/Project');
const Issue = require('../../models/Issue');
const Comment = require('../../models/Comment');
const { errorHandler } = require('../../utils');

async function removeProject(req, res) {
    const projectId = req.params.progectId;

    const project = await Project.findById(projectId);
    if (project) {
        try {
            await Issue.deleteMany({ project: projectId });
            await Comment.deleteMany({ project: projectId });
            project.remove().then(() => {
                res.status(200).json({
                    message: 'Project removed'
                });
            });
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        res.status(404).json({
            message: 'Project dont found'
        });
    }

}

module.exports = function (req, res) {
    removeProject(req, res);
};