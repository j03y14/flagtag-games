import axios from 'axios';

const serverUri = process.env.SERVER_URI;

const oauthAPI = {
  async getAccessToken({social, code}) {
    const { data } = await axios.post(
      `${serverUri}/api/user/signIn/${social}`,
      { code },
      { withCredentials: true },
    );

    return data;
  },
  async authCheck() {
    const data = await axios.post(`${serverUri}/api/main/authCheck`, null, {
      withCredentials: true,
    });

    return data.status;
  },
};

export default oauthAPI;
