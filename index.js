
const app = require('./app');
const config = require('./config/default');

app.listen(config.port, () => {
    console.log(`Server has been started ${config.port}`);
});