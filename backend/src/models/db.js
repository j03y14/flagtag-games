const mongoose = require('mongoose');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

module.exports = () => {
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
};
