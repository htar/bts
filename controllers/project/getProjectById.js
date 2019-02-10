const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

function getProjectById(req, res) {
    try {
        const project = Project.find({
            project: req.params.id
        });
        res.status(200).json(project);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getProjectById(req, res);
};