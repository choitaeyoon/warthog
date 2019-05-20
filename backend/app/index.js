const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Express config
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

const userRouter = require('./api/user');

//Routes
app.use('/user', userRouter);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        type: 'error',
        message: err.message
    })
});

module.exports = app;