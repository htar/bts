const bcrypt = require('bcryptjs');

const User = require('../../models/User');
const {errorHandler} = require('../../utils');


async function register(req, res) {

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
            errorHandler(error);
        }
    }
}

module.exports = function (req, res) {
    register(req, res);
};