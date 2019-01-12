module.exports.login = function (req, res) {
    res.status(200).json({
        password: req.body
    });
};


module.exports.register = function (req, res) {
    res.status(200).json({
        login: true
    });
};