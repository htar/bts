const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const config = require('../../config/default');

module.exports = async function (req, res) {
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
            res.status(401).json({
                message:'Incorrect password, please repeat'
            });
            
        }
        
    } else {
        // user dont find
        res.status(404).json({
            message:'Email or User name not correct.'
        });
    }
};