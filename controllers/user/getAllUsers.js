const User = require('../../models/User');
const {  errorHandler } = require('../../utils');

async function getAllUsers(req, res) {
    const {  limit = 50, skip = 0 } = req.query;

    try {
        const users = await User.find()
            .sort({
                createdAt: -1
            })
            .skip(+skip)
            .limit(+limit)
            .exec();

        res.json(users);

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getAllUsers(req, res);
};