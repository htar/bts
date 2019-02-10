const User = require('../../models/User');
const {  errorHandler } = require('../../utils');


function getUserById(req, res) {
    try {
        const user = User.find({
            user: req.params.id
        });
        res.status(200).json(user);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getUserById(req, res);
};