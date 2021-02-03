const express = require('express');

const { socialLogin } = require('./controller');

const userRouter = express.Router();

userRouter.post('/signIn/:social', socialLogin);

module.exports = userRouter;
