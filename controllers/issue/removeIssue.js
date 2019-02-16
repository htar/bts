const Issue = require('../../models/Issue');
const {  errorHandler } = require('../../utils');



async function removeIssue(req, res) {

    const issue = await Issue.findById(req.params.issueId);
    if (issue) {
        try {
            issue.remove().then(()=>{
                res.status(200).json({
                    message:'Issue removed'
                });
            });
        } catch (error) {
            errorHandler(res, error);
        }
    }else{
        res.status(404).json({
            message:'Issue dont found'
        });
    }
}


module.exports = function (req, res) {
    removeIssue(req, res);
};