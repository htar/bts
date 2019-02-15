const Issue = require('../../models/Issue');
const Comment = require('../../models/Comment');
const { errorHandler } = require('../../utils');


async function getIssueById(req, res) {
    try {
        const issue = await Issue.findById(req.params.issueId);
        const comment = await Comment.find({issue:req.params.issueId});
        res.status(200).json({issue,comment});
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getIssueById(req, res);
};