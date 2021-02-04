const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const mongoose = require('mongoose');

require('module-alias/register.js');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const router = require('@routes');

mongoose
  .connect(
    `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_DATABASE}?authSource=${DB_DATABASE}`,
    {
      useNewUrlParser: true,
    },
  )
  .then(() => {
    console.log('Successfully connected to mongodb');
  })
  .catch((e) => console.error(e));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use('/', router);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json(err.message);
});

const server = app.listen(3000, () => {
  const { port } = server.address();

  console.log('Server is working on port', port);
});
