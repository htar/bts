const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

async function createCategory(req, res) {
    try {
        const category = await new Category({
            name:req.body.name,
            project:req.body.projectId,
    
        }).save();
        res.status(201)
            .json(category);
    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    createCategory(req, res);
};