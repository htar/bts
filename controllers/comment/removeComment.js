const Comment = require('../../models/Comment');
const {  errorHandler } = require('../../utils');

async function removeComment(req, res) {
    const comment = await Comment.findById(req.params.commentId);
    if (comment) {
        try {
            comment.remove().then(()=>{
                res.status(200).json({
                    message:'Comment removed'
                });
            });
        } catch (error) {
            errorHandler(res, error);
        }
    }else{
        res.status(404).json({
            message:'Comment dont found'
        });
    }
}
module.exports = function (req, res) {
    removeComment(req, res);
};

