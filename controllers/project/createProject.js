const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

function createProject(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    createProject(req, res);
};