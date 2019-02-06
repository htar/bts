const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

function getAllCategories(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    getAllCategories(req, res);
};