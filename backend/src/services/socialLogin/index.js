const kakaoLogin = require('@services/socialLogin/kakao');
const googleLogin = require('@services/socialLogin/google');
const makeToken = require('@services/socialLogin/token');

const getUserInfo = {
  kakao: kakaoLogin,
  google: googleLogin,
};

const siginInOAuth = async (social, code) => {
  const { email, userInfo } = await getUserInfo[social](code);
  const accessToken = makeToken({ email, social });

  return { accessToken, userInfo };
};

module.exports = siginInOAuth;
