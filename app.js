const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const routers = require('./routes/index.route');
const config = require('./config/default');
const middleware = require('./middleware');

mongoose.set('useCreateIndex', true);
mongoose.connect(config.mongoURI,{ useNewUrlParser: true })
    .then(()=>console.log('MongoDB connected'))
    .catch(error=> console.log(error));

app.use(passport.initialize());
middleware.passport(passport);

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routers);



module.exports = app;