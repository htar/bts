const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routers = require('./routes/index.route');
const config = require('./config/default');

mongoose.connect(config.mongoURI,{ useNewUrlParser: true })
    .then(()=>console.log('MongoDB connected'))
    .catch(error=> console.log(error));

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routers);



module.exports = app;