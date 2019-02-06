const Issue = require('../../models/Issue');
const {  errorHandler } = require('../../utils');


async function updateIssue(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateIssue(req, res);
};