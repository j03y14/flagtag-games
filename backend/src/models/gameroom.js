const mongoose = require('mongoose');

const GameRoomSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  isPublic: { type: Boolean },
  timeLimit: { type: Number },
  gameType: {
    name: { type: String },
    image: { type: String },
    rule: { type: String },
  },
  playerList: [
    {
      isMaster: { type: Boolean },
      playerNumber: { type: Number },
      id: { type: Number },
      team: { type: String },
    },
  ],
  recordList: [
    {
      order: { type: Number },
      playerId: { type: Number },
      position: { type: Number },
    },
  ],
});

module.exports = mongoose.model('GameRoom', GameRoomSchema);
