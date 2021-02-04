const kakaoLoginApi = require('@apis/kakaoLogin');
const userRepository = require('@repositories/user');

const kakaoLogin = async (code) => {
  try {
    const accessToken = await kakaoLoginApi.getAccessToken(code);
    const kakaoUserInfo = await kakaoLoginApi.getUserInfo(accessToken);
    const user = await userRepository.findByEmail(kakaoUserInfo?.email);
    const userInfo = {
      email: kakaoUserInfo.email,
      nickName: kakaoUserInfo.profile.nickname,
      social: 'kakao',
      levle: 0,
    };

    if (!user) {
      const createdUser = await userRepository.create(userInfo);
      userInfo.id = createdUser.id;
    } else {
      userInfo.id = user.id;
    }

    return { email: kakaoUserInfo.email, userInfo };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
module.exports = kakaoLogin;
