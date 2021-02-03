const userRouter = require('@routes/user');
const express = require('express');

const rootRouter = express.Router();

rootRouter.use('/api/', userRouter);
