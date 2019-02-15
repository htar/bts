const Issue = require('../../models/Issue');
const User = require('../../models/User');
const {  errorHandler } = require('../../utils');



async function createIssue(req, res) {
    var now = Date.now();
    const user = await User.findById(req.user.id);
    if (user) {
        try {
            const issue = await new Issue({
                createdAt: now,
                title: req.body.title,
                description: req.body.description,
                project: req.body.projectId,
                user: user.id,
                subscribeUser: [user.id],

            }).save();
            res.status(201)
                .json(issue);
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        errorHandler({
            message: 'Cant create Issue please authorize'
        });
    }

}

module.exports = function (req, res) {
    createIssue(req, res);
};