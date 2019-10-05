const Issue = require('../../models/Issue');
const Comment = require('../../models/Comment');
const User = require('../../models/User');
const { errorHandler } = require('../../utils');


async function getIssueById(req, res) {
    try {
        const issue = await Issue.findById(req.params.issueId);
        const comment = await Comment.aggregate([
            { $match : {issue:issue._id} },
            { $lookup:
                {
                    from: 'users',
                    localField: 'commentedBy',
                    foreignField: '_id',
                    as: 'commentedBy'
                }
            },
            {
                $unwind: '$commentedBy'
            },
            {
                $project: {
                    _id:1,
                    comments:1,
                    createdAt:1,
                    issue:1,
                    project:1,
                    title:1,
                    __v:1,
                    commentedBy: {
                        '_id' : '$commentedBy._id',
                        'username' : '$commentedBy.username',
                        'email' : '$commentedBy.email',
                    }
                }
            }
        ]);
        issue.user = await User.findOne({ _id: issue.user }, { username: 1, email: 1, _id: 1 });
        res.status(200).json({issue,comment});
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getIssueById(req, res);
};