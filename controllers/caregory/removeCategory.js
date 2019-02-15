const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

async function removeCategory(req, res) {

    const category = await Category.findById(req.params.categoryId);
    if (category) {
        try {
            category.remove().then(()=>{
                res.status(200).json({
                    message:'Category removed'
                });
            });
        } catch (error) {
            errorHandler(res, error);
        }
    }else{
        res.status(404).json({
            message:'Category dont found'
        });
    }

}
module.exports = function (req, res) {
    removeCategory(req, res);
};