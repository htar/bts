const Issue = require('../../models/Issue');
const {
    errorHandler
} = require('../../utils');


async function updateIssue(req, res) {
    try {
        const issue = await Issue.findOneAndUpdate({
            _id: req.params.issueId
        }, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(issue);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateIssue(req, res);
};