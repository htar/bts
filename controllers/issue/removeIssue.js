const Issue = require('../../models/Issue');
const {  errorHandler } = require('../../utils');



async function removeIssue(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}


module.exports = function (req, res) {
    removeIssue(req, res);
};