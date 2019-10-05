const Comment = require('../../models/Comment');
const {  errorHandler } = require('../../utils');

async function createComment(req, res) {
    try {
        const comment = await new Comment({
            title:req.body.title,
            commentedBy:req.user.id,
            issue:req.body.issueId,
            project:req.body.projectId,
    
        }).save();
        res.status(201)
            .json(comment);
    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    createComment(req, res);
};

