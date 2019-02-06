const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

function getCategoryById(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    getCategoryById(req, res);
};