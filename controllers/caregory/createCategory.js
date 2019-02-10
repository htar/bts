const Category = require('../../models/Category');
const User = require('../../models/User');
const {  errorHandler } = require('../../utils');

async function createCategory(req, res) {
    const user = await User.findById(req.user.id);
    if (user){
        try {
            const category = await new Category({
                name:req.body.name,
                project:req.body.projectId,
                user:user.id,
        
            }).save();
            res.status(201)
                .json(category);
        } catch (error) {
            errorHandler(res, error);
        }
    } else {
        errorHandler({ message:'Cant create Project please authorize'});
    }
}
module.exports = function (req, res) {
    createCategory(req, res);
};