const express = require('express');

const { authCheck } = require('./controller');

const mainRouter = express.Router();

mainRouter.post('/authCheck', authCheck);

module.exports = mainRouter;
