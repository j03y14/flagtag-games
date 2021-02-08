const express = require('express');

const { getAllGameTypes } = require('./controller');

const gameTypeRouter = express.Router();

gameTypeRouter.get('/', getAllGameTypes);

module.exports = gameTypeRouter;
