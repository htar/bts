const User = require('../../models/User');
const {  errorHandler } = require('../../utils');



async function updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(user);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateUser(req, res);
};