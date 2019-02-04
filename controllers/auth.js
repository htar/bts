const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const config = require('../config/default');
const {errorHandler} = require('../utils');

module.exports.login = async function (req, res) {
    const user = await User.findOne({
        '$or': [
            {email: req.body.email},
            {username: req.body.username}
        ]
    });
    if (user){
        // check the password, a user was registered
        const passwordResult = bcrypt.compareSync(req.body.password,user.password);
        if (passwordResult) {
            // generate token, password correct
            const token = jwt.sign(
                {
                    email:user.email,
                    username:user.username,
                    userId:user._id
                },
                config.jwt,
                {expiresIn: 60 * 60}
            );
            res.status(200).json({
                token:`Bearer ${token}`
            });
            
        } else {
            errorHandler({message:'Incorrect password, please repeat'});
        }
        
    } else {
        // user dont find
        errorHandler({ message:'Email or User name not correct.'});
    }
};



module.exports.register = async function(req, res) {

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
};