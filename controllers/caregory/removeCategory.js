const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

function removeCategory(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    removeCategory(req, res);
};