const Project = require('../../models/Project');
const Issue = require('../../models/Issue');
const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

async function getProjectById(req, res) {
    try {
        const project = await Project.findById(req.params.progectId);
        const issues = await Issue.find({project:req.params.progectId});
        const categories = await Category.find({project:req.params.progectId});
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