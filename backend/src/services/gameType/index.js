const gameTypeRepository = require('@repositories/gameType');

const gameTypeService = {
  async getAllGameTypes() {
    const gameTypes = await gameTypeRepository.getAll();
    return gameTypes;
  },
  async getGameTypeById(id) {
    const gameType = await gameTypeRepository.getById(id);
    return gameType;
  },
};

module.exports = gameTypeService;
