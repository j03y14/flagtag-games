const gameRoomService = require('@services/gameRoom');
const gameTypeService = require('@services/gameType');
const { SUCCESS } = require('@constants/status');

const gameTypeController = {
  async getAllGameRooms(req, res, next) {
    try {
      const gameRooms = await gameRoomService.getAllGameRooms();
      res.status(SUCCESS).json({ gameRooms });
    } catch (error) {
      next(error);
    }
  },
  async createGameRoom(req, res, next) {
    const { title, isPublic, timeLimit, gameTypeId } = req.body;
    try {
      const gameTypeById = await gameTypeService.getGameTypeById(gameTypeId);
      const gameRoom = await gameRoomService.createGameRoom(
        title,
        isPublic,
        timeLimit,
        gameTypeById[0],
      );
      res.status(SUCCESS).json({ gameRoom });
    } catch (error) {
      next(error);
    }
  },
  async deleteGameRoom(req, res, next) {
    const { id } = req.params;
    console.log('id:', req.params);
    try {
      await gameRoomService.deleteGameRoom(id);
      res.sendStatus(SUCCESS);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = gameTypeController;
