const User = require('../../models/User');
const {  errorHandler } = require('../../utils');


function getUserById(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getUserById(req, res);
};