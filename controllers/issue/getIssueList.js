const Issue = require('../../models/Issue');
const Category = require('../../models/Category');
const { errorHandler }  = require('../../utils');

async function getAllIssues (req, res) {
    try {
        const issues = await Issue.find({
            project: req.params.projectId,

        });
        const categories = await Category.find({
            project: req.params.projectId,

        });
        res.status(200).json({
            issues,
            categories
        });

    } catch (error) {
        errorHandler(res, error);
    }
}


module.exports = function (req, res) {
    getAllIssues(req, res);
};