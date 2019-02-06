const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

function updateCategory(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateCategory(req, res);
};