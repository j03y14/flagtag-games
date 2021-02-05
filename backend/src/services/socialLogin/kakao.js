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
      level: 0,
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

// userInfo 속의 정보 구조
// {
//   profile_needs_agreement: false,
//   profile: {
//     nickname: '박재윤',
//     thumbnail_image_url: 'http://k.kakaocdn.net/dn/brRSGg/btqOuwjXyJA/54d1IXFxUwolt7UPvNeQk0/img_110x110.jpg',
//     profile_image_url: 'http://k.kakaocdn.net/dn/brRSGg/btqOuwjXyJA/54d1IXFxUwolt7UPvNeQk0/img_640x640.jpg'
//   },
//   has_email: true,
//   email_needs_agreement: false,
//   is_email_valid: true,
//   is_email_verified: true,
//   email: 'j03y14@gmail.com'
// }
