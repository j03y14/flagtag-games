const axios = require('axios');
const createError = require('http-errors');

const { GET_SOCIAL_TOKEN_FAILED, GET_SOCIAL_USER_INFO_FAILED } = require('@constants/status');

const googleSocialLoginHost = process.env.GOOGLE_LOGIN_HOST;
const googleUserInfoHost = process.env.GOOGLE_GET_USER_INFO_HOST;
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

const googleLoginApi = {
  async getAccessToken(code) {
    const headers = {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    try {
      const {
        data,
      } = await axios.post(
        `${googleSocialLoginHost}/token?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&grant_type=authorization_code`,
        null,
        { headers },
      );

      return data.access_token;
    } catch (error) {
      console.error(error);
      throw createError(GET_SOCIAL_TOKEN_FAILED, 'failed to get google access token');
    }
  },

  async getUserInfo(accessToken) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    try {
      const { data } = await axios.get(`${googleUserInfoHost}/oauth2/v2/userinfo`, {
        headers,
      });

      return data;
    } catch (error) {
      console.error(error);
      throw createError(GET_SOCIAL_USER_INFO_FAILED, 'failed to get google user info');
    }
  },
};

module.exports = googleLoginApi;
