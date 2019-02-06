const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

function removeProject(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    removeProject(req, res);
};