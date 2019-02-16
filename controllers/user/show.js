const User = require('../../models/User');
const {  errorHandler } = require('../../utils');


async function show(req, res) {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    show(req, res);
};