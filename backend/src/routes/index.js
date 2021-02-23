const userRouter = require('@routes/user');
const mainRouter = require('@routes/main');

const gameTypeRouter = require('@routes/gameType');
const gameRoomRouter = require('@routes/gameRoom');
const express = require('express');
const authCheck = require('../middlewares/authCheck');

const rootRouter = express.Router();

rootRouter.use('/api/user', userRouter);
rootRouter.use('/api/main', authCheck, mainRouter);
rootRouter.use('/api/gameTypes', gameTypeRouter);
rootRouter.use('/api/gameRoom', gameRoomRouter);

module.exports = rootRouter;
