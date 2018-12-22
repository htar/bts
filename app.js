const express = require('express');
const app = express();

const authRouter = require('./routes/auth');


app.use('/api/auth', authRouter);



module.exports = app;