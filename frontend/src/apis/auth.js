import axios from 'axios';

const serverUri = process.env.SERVER_URI;

const oauthAPI = {
  async getAccessToken(social, code) {
    try {
      const { data } = await axios.post(
        `${serverUri}/api/user/signIn/${social}`,
        { code },
        { withCredentials: true },
      );

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async authCheck() {
    try {
      const data = await axios.post(`${serverUri}/api/main/authCheck`, null, {
        withCredentials: true,
      });

      return data.status;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default oauthAPI;
