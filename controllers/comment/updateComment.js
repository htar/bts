const Comment = require('../../models/Comment');
const {  errorHandler } = require('../../utils');

async function updateComment(req, res) {
    try {
        const comment = await Comment.findOneAndUpdate({
            _id: req.params.commentId
        }, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(comment);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateComment(req, res);
};