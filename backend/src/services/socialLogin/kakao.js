const kakaoLoginApi = require('@apis/kakaoLogin');

const kakaoLogin = async (code) => {
  try {
    const accessToken = await kakaoLoginApi.getAccessToken(code);
    const userInfo = await kakaoLoginApi.getUserInfo(accessToken);

    // DB에서 사용자 정보를 가져오는 작업이 필요할듯
    // level 같은 거는 우리 서비스의 DB에만 있으니까

    // 반환할 때 userInfo라고 되어 있는거를 DB에서 가져온 정보로 바꿔주어야함.
    return { email: userInfo.email, userInfo };
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
