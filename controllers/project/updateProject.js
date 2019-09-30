const Project = require('../../models/Project');
const {  errorHandler } = require('../../utils');

async function updateProject(req, res) {
    const updated = { name: req.body.name };
    if (req.file) updated.imageSrc = req.file.path;

    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.params.progectId },
            { $set: updated },
            { new: true }
        );
        res.status(200).json(project);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateProject(req, res);
};
