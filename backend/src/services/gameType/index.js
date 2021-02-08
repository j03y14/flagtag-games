const gameTypeRepository = require('@repositories/gameType');

const gameTypeService = {
  async getAllGameTypes() {
    const gameTypes = await gameTypeRepository.getAll();
    return gameTypes;
  },
};

module.exports = gameTypeService;
