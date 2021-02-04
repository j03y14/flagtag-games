const googleLoginApi = require('@apis/googleLogin');

const googleLogin = async (code) => {
  try {
    const accessToken = await googleLoginApi.getAccessToken(code);
    const userInfo = await googleLoginApi.getUserInfo(accessToken);
    console.log('google user info:', userInfo);

    return { email: userInfo.email, userInfo };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = googleLogin;
