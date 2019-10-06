const Comment = require('../../models/Comment');
const User = require('../../models/User');
const {  errorHandler } = require('../../utils');

async function createComment(req, res) {
    const user = await User.findById(req.user.id, { username: 1, email: 1, _id: 1 });
    if (user){
        try {
            const comment = await new Comment({
                message:req.body.message,
                commentedBy:req.user.id,
                issue:req.body.issueId,
                project:req.body.projectId,
        
            }).save();
            comment.commentedBy = user;
            res.status(201)
                .json(comment);
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        errorHandler({ message:'Cant create Project.'});
    }

}
module.exports = function (req, res) {
    createComment(req, res);
};

