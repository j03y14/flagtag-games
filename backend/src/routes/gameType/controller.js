const gameTypeService = require('@services/gameType');
const { SUCCESS } = require('@constants/status');

const gameTypeController = {
  async getAllGameTypes(req, res, next) {
    try {
      const gameTypes = await gameTypeService.getAllGameTypes();
      res.status(SUCCESS).json({ gameTypes });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = gameTypeController;
