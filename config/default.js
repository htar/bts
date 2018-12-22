if (process.env.NODE_ENV === 'production') {
    module.exports = require('./production');
} else {
    module.exports = require('./development');
}
module.exports = {
    port: process.env.PORT || 3030,
}