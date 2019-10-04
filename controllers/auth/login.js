const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const config = require('../../config/default');
const {errorHandler} = require('../../utils');

async function login (req, res) {
    const user = await User.findOne({
        '$or': [
            {email: req.body.email},
            {username: req.body.email}
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
            errorHandler(res,{message:'Incorrect password, please repeat'});
        }
        
    } else {
        // user dont find
        errorHandler(res,{ message:'Email or User name not correct.'});
    }
}



module.exports = function (req, res) {
    login(req, res);
};