const Issue = require('../../models/Issue');
const Pipeline = require('../../models/Pipeline');
const { errorHandler }  = require('../../utils');

async function getAllIssues (req, res) {
    try {
        const issues = await Issue.find({
            project: req.params.projectId,

        });
        const pipelines = await Pipeline.find({
            project: req.params.projectId,

        });
        res.status(200).json({
            issues,
            pipelines
        });

    } catch (error) {
        errorHandler(res, error);
    }
}


module.exports = function (req, res) {
    getAllIssues(req, res);
};