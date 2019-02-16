const {  errorHandler } = require('../../utils');


function overview(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}


module.exports = function (req, res) {
    overview(req, res);
};