const Issue = require('../../models/Issue');
const User = require('../../models/User');
const {  errorHandler } = require('../../utils');



async function createIssue(req, res) {
    var now = Date.now();
    const user = await User.findById(req.body.userId);
    if (user){
        try {
            const issue = new Issue({
                createdAt:now,
                title:req.body.title,
                description:req.body.description,
                project:req.body.project._id,
                user:req.body.user._id,
    
            });
            await issue.save();
            res.status(201)
                .json(issue);
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        errorHandler({ message:'Email or User name not correct.'});
    }

}

module.exports = function (req, res) {
    createIssue(req, res);
};