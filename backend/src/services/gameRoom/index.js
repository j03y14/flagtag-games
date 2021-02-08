const gameRoomRepository = require('@repositories/gameRoom');

const gameRoomService = {
  async getAllGameRooms() {
    const gameRooms = await gameRoomRepository.getAll();
    return gameRooms;
  },
  async createGameRoom(title, isPublic, timeLimit, gameType) {
    const gameRoom = await gameRoomRepository.create({
      title,
      isPublic,
      timeLimit,
      gameType,
    });
    return gameRoom;
  },
  async deleteGameRoom(id) {
    const deletionResult = await gameRoomRepository.delete(id);
    return deletionResult;
  },
};

module.exports = gameRoomService;
