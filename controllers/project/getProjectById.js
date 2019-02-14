const Project = require('../../models/Project');
const Issue = require('../../models/Issue');
const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

async function getProjectById(req, res) {
    const projectId = req.params.progectId;
    try {
        const project = await Project.findById(projectId);
        const issues = await Issue.find({project:projectId});
        const categories = await Category.find({project:projectId});
        res.status(200).json({
            issues,
            categories,
            project
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getProjectById(req, res);
};