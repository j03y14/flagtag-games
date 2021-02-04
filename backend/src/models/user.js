const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickName: { type: String },
  email: { type: String },
  level: { type: Number },
  social: { type: String },
});
module.exports = mongoose.model('User', userSchema);
