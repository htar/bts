const Project = require('../../models/Project');
const User = require('../../models/User');

const {  errorHandler } = require('../../utils');

async function createProject(req, res) {
    const user = await User.findById(req.user.id);
    if (user){
        try {
            const project = await new Project({
                name:req.body.name,
                user: user.id
    
            }).save();
            res.status(201)
                .json(project);
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        errorHandler({ message:'Cant create Project.'});
    }
}

module.exports = function (req, res) {
    createProject(req, res);
};