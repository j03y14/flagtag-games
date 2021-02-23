import axios from 'axios';

const serverUri = process.env.SERVER_URI;

const gameTypeApi = {
  async getAllGameTypes() {
    try {
      const { data } = await axios.get(`${serverUri}/api/gameTypes`, { withCredentials: true });

      return data.gameTypes;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default gameTypeApi;
