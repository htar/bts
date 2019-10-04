const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const path = require('path');

const routers = require('./routes/index.route');
const config = require('./config/default');
const middleware = require('./middleware');

mongoose.set('useCreateIndex', true);
mongoose
	.connect(config.mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB connected'))
	.catch(error => console.log(error));

app.use(passport.initialize());
middleware.passport(passport);

app.use('/public', express.static('public'));

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routers);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'));
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'client', 'dist', 'client', 'index.html')
        );
    });
}

module.exports = app;
