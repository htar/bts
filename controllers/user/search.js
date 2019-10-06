const User = require('../../models/User');
const {  errorHandler } = require('../../utils');


async function search(req, res) {
    const {  limit = 50, skip = 0, search = '' } = req.body;
    try {
        const users = await User.find({username : {'$regex': search}}, { username: 1, email: 1,_id:1 })
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
    search(req, res);
};