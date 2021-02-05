const userRouter = require('@routes/user');
const gameTypeRouter = require('@routes/gameType');
const express = require('express');

const rootRouter = express.Router();

rootRouter.use('/api/user', userRouter);
rootRouter.use('/api/gameTypes', gameTypeRouter);

module.exports = rootRouter;
