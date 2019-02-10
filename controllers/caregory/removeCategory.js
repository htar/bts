const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

async function removeCategory(req, res) {
    try {
        await Category.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message:'Category removed'
        });
    } catch (error) {
        errorHandler(res, error);
    }
}
module.exports = function (req, res) {
    removeCategory(req, res);
};