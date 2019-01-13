const User = require('../../models/User');

module.exports = async function(req, res) {

    const candidate = await User.findOne({
        email: req.body.email,
    });
    if (candidate) {
        res.status(409).json({
            message: 'This email or user name used'
        });

    } else {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        try {
            await user.save();
            res.status(201)
                .json(user);
        } catch (error) {
            res.status(404).json({
                message: 'Create User error'
            });
        }
    }
};