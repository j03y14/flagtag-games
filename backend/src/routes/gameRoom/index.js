const express = require('express');

const { getAllGameRooms, createGameRoom, deleteGameRoom } = require('./controller');

const userRouter = express.Router();

userRouter.get('/', getAllGameRooms);
userRouter.post('/', createGameRoom);
userRouter.delete('/:id', deleteGameRoom);

module.exports = userRouter;
