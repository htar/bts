const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const User = mongoose.model('users')
const config = require('../config/default');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt,
};
module.exports = passport => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.userId).select('email id username');
        try {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
            
        } catch (error) {
            console.log(error);
            return done(error, false);
        }

        // });
    }));
}