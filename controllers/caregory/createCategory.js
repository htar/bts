const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

function createCategory(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    createCategory(req, res);
};