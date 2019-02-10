const Issue = require('../../models/Issue');
const { errorHandler } = require('../../utils');


async function getIssueById(req, res) {
    try {
        const issue = Issue.find({
            issue: req.params.id
        });
        res.status(200).json(issue);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getIssueById(req, res);
};