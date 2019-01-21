
const bcrypt = require('bcryptjs');

const User = require('../../models/User');
const utils = require('../../utils');

module.exports = async function(req, res) {

    const candidate = await User.findOne({
        '$or': [
            {email: req.body.email},
            {username: req.body.username}
        ]
    });
    if (candidate) {
        res.status(409).json({
            message: 'This email or user name used'
        });

    } else {
        const sald  = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: bcrypt.hashSync(password, sald)
        });
        try {
            await user.save();
            res.status(201)
                .json(user);
        } catch (error) {
            utils.errorHandler(error);
        }
    }
};