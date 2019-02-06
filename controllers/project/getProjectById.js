const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

function getProjectById(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getProjectById(req, res);
};