const kakaoLogin = require('@services/socialLogin/kakao');
const makeToken = require('@services/socialLogin/token');

const getUserInfo = {
  kakao: kakaoLogin,
};

const siginInOAuth = async (social, code) => {
  const { email, userInfo } = await getUserInfo[social](code);
  const accessToken = makeToken({ email, social });

  console.log(accessToken);
  return { accessToken, userInfo };
};

module.exports = siginInOAuth;
