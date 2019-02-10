const Issue = require('../../models/Issue');
const {  errorHandler } = require('../../utils');



async function removeIssue(req, res) {
    try {
        await Issue.remove({
            _id: req.params.id
        });
        res.status(200).json({
            message:'Issue  removed'
        });
    } catch (error) {
        errorHandler(res, error);
    }
}


module.exports = function (req, res) {
    removeIssue(req, res);
};