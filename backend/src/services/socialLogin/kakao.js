const kakaoLoginApi = require('@apis/kakaoLogin');

const kakaoLogin = async (code) => {
  try {
    const accessToken = await kakaoLoginApi.getAccessToken(code);
    const userInfo = await kakaoLoginApi.getUserInfo(accessToken);
    console.log(userInfo);

    // TODO: 사용자가 DB에 없으면 추가한 후에 사용자 정보로 토큰을 만들어 반환해준다.
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = kakaoLogin;
