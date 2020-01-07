const Project = require('../../models/Project');
const Issue = require('../../models/Issue');
const Pipeline = require('../../models/Pipeline');
const {  errorHandler } = require('../../utils');

async function getProjectById(req, res) {
    const projectId = req.params.progectId;
    try {
        const project = await Project.findById(projectId);
        const issues = await Issue.find({project:projectId}).sort({'createdAt': -1});
        const pipelines = await Pipeline.find({project:projectId});
        res.status(200).json({
            issues,
            pipelines,
            project
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getProjectById(req, res);
};