const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

function getAllProjects(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getAllProjects(req, res);
};