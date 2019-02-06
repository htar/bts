const User = require('../../models/User');
const {  errorHandler } = require('../../utils');



function updateUser(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateUser(req, res);
};