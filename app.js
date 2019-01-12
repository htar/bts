const express = require('express');
const app = express();

const analyticsRouter = require('./routes/analytics');
const authRouter = require('./routes/auth');
const caregoryRouter = require('./routes/caregory');
const issueRouter = require('./routes/issue');
const projectRouter = require('./routes/project');
const userRouter = require('./routes/user');


app.use('/api/analytics', analyticsRouter);
app.use('/api/auth', authRouter);
app.use('/api/caregory', caregoryRouter);
app.use('/api/issue', issueRouter);
app.use('/api/project', projectRouter);
app.use('/api/user', userRouter);



module.exports = app;