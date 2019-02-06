const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

function updateProject(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateProject(req, res);
};