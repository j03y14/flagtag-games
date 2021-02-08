const kakaoLoginApi = require('@apis/kakaoLogin');
const userRepository = require('@repositories/user');

const kakaoLogin = async (code) => {
  try {
    const accessToken = await kakaoLoginApi.getAccessToken(code);
    const userInfoFromKakao = await kakaoLoginApi.getUserInfo(accessToken);
    const user = await userRepository.findByEmail(userInfoFromKakao.email);
    const defaultUserInfo = {
      email: userInfoFromKakao.email,
      nickName: userInfoFromKakao.profile.nickname,
      social: 'kakao',
      level: 0,
    };

    if (user.length === 0) {
      console.log('no matched user');
      const createdUser = await userRepository.create(defaultUserInfo);
      defaultUserInfo.id = createdUser.id;
    } else {
      defaultUserInfo.id = user[0].id;
    }
    return { email: defaultUserInfo.email, userInfo: defaultUserInfo };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = kakaoLogin;
