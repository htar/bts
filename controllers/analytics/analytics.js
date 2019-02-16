const {  errorHandler } = require('../../utils');
function analytics(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports = function (req, res) {
    analytics(req, res);
};