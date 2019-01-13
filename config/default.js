if (process.env.NODE_ENV === 'production') {
    module.exports = require('./production');
} else {
    module.exports = {
        port: process.env.PORT || 3030,
        mongoURI: 'mongodb://localhost/bts'
    }
}