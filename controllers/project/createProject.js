const Project = require('../../models/Project');
const User = require('../../models/User');

const {  errorHandler } = require('../../utils');

async function createProject(req, res) {
    const user = await User.findById(req.body.userId);
    if (user){
        try {
            const project = new Project({
                name:req.body.name,
    
            });
            await project.save();
            res.status(201)
                .json(project);
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        errorHandler({ message:'Email or User name not correct.'});
    }
}

module.exports = function (req, res) {
    createProject(req, res);
};