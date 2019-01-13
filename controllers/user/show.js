module.exports = function(req, res) {
    return res.json(req.user);
}