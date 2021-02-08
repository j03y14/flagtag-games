const mongoose = require('mongoose');

const GameTypeSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  rule: { type: String },
});

module.exports = mongoose.model('GameType', GameTypeSchema);
