const axios = require('axios');
const createError = require('http-errors');

const { GET_SOCIAL_TOKEN_FAILED, GET_SOCIAL_USER_INFO_FAILED } = require('@constants/status');

const kakaoSocialLoginHost = process.env.KAKAO_LOGIN_HOST;
const kakaoUserInfoHost = process.env.KAKAO_GET_USER_INFO_HOST;
const kakaoClientId = process.env.KAKAO_CLIENT_ID;
const kakaoRedirectUrl = `${process.env.REDIRECT_URI}/kakao`;
const kakaoClientSecret = process.env.KAKAO_CLIENT_SECRET;

const kakaoLoginApi = {
  async getAccessToken(code) {
    const headers = {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    try {
      const {
        data,
      } = await axios.post(
        `${kakaoSocialLoginHost}/oauth/token?grant_type=authorization_code&client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUrl}&code=${code}&client_secret=${kakaoClientSecret}`,
        null,
        { headers },
      );

      return data.access_token;
    } catch (error) {
      console.error(error);
      throw createError(GET_SOCIAL_TOKEN_FAILED, 'failed to get kakao access token');
    }
  },

  async getUserInfo(accessToken) {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    try {
      const { data } = await axios.post(`${kakaoUserInfoHost}/v2/user/me`, null, {
        headers,
      });

      return data.kakao_account;
    } catch (error) {
      console.error(error);
      throw createError(GET_SOCIAL_USER_INFO_FAILED, 'failed to get kakao user info');
    }
  },
};

module.exports = kakaoLoginApi;
