const User = require('../../models/User');
const {  errorHandler } = require('../../utils');

function getAllUsers(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getAllUsers(req, res);
};