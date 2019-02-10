const User = require('../../models/User');
const {  errorHandler } = require('../../utils');


function show(req, res) {
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
    show(req, res);
};