const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

async function updateProject(req, res) {
    try {
        const project = await Project.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(project);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateProject(req, res);
};