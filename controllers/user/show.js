const User = require('../../models/User');
const {  errorHandler } = require('../../utils');


function show(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    show(req, res);
};