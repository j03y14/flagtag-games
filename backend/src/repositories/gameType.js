const GameTypeModel = require('@models/gameType');
const { GAMETYPE_GET_ERROR } = require('@constants/status');
const createError = require('http-errors');

const gameTypeRepository = {
  getAll: async () => {
    try {
      return await GameTypeModel.find({});
    } catch (error) {
      console.error(error);
      throw createError(GAMETYPE_GET_ERROR, 'Get game types error');
    }
  },
  getById: async (filter) => {
    try {
      const gameType = await GameTypeModel.find({ _id: filter });
      return gameType;
    } catch (error) {
      console.error(error);
      throw createError(GAMETYPE_GET_ERROR, 'Get game type by id error');
    }
  },
};

module.exports = gameTypeRepository;
