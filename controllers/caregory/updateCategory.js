const Category = require('../../models/Category');
const {  errorHandler } = require('../../utils');

async function updateCategory(req, res) {
    try {
        const category = await Category.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true
        });
        res.status(200).json(category);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    updateCategory(req, res);
};