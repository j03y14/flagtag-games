const GameRoomModel = require('@models/gameroom');
const {
  GAMEROOM_GET_ERROR,
  GAMEROOM_CREATE_ERROR,
  GAMEROOM_DELETE_ERROR,
} = require('@constants/status');
const createError = require('http-errors');

const gameRoomRepository = {
  getAll: async () => {
    try {
      return await GameRoomModel.find({});
    } catch (error) {
      console.error(error);
      throw createError(GAMEROOM_GET_ERROR, 'Get game room error');
    }
  },
  create: async (payload) => {
    try {
      return await GameRoomModel.create(payload);
    } catch (error) {
      console.error(error);
      throw createError(GAMEROOM_CREATE_ERROR, 'Create game room error');
    }
  },
  delete: async (filter) => {
    try {
      console.log('filter', filter);
      return await GameRoomModel.deleteOne({ _id: filter });
    } catch (error) {
      console.error(error);
      throw createError(GAMEROOM_DELETE_ERROR, 'Delete game room error');
    }
  },
};

module.exports = gameRoomRepository;
