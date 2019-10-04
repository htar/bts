const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

async function getAllProjects(req, res) {
    try {
        const projects = await Project.find().sort({'createdAt': -1});
        res.status(200).json({
            ...projects
        });

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    getAllProjects(req, res);
};