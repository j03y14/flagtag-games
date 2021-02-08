const userRouter = require('@routes/user');
const gameTypeRouter = require('@routes/gameType');
const gameRoomRouter = require('@routes/gameRoom');
const express = require('express');

const rootRouter = express.Router();

rootRouter.use('/api/user', userRouter);
rootRouter.use('/api/gameTypes', gameTypeRouter);
rootRouter.use('/api/gameRoom', gameRoomRouter);

module.exports = rootRouter;
