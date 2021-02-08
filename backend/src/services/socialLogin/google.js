const googleLoginApi = require('@apis/googleLogin');
const userRepository = require('@repositories/user');

const googleLogin = async (code) => {
  try {
    const accessToken = await googleLoginApi.getAccessToken(code);
    const userInfoFromGoogle = await googleLoginApi.getUserInfo(accessToken);
    const user = await userRepository.findByEmail(userInfoFromGoogle.email, 'google');
    const defaultUserInfo = {
      email: userInfoFromGoogle.email,
      nickName: userInfoFromGoogle.name,
      social: 'google',
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

module.exports = googleLogin;

// userinfo 정보
// {
//   "id": "113063555394098111226",
//   "email": "j03y14@gmail.com",
//   "verified_email": true,
//   "name": "박재윤",
//   "given_name": "재윤",
//   "family_name": "박",
//   "picture": "https://lh4.googleusercontent.com/-7ohF-8PAM5A/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclw4OYZlq7sSBodyFYQz38NIP0UZQ/s96-c/photo.jpg",
//   "locale": "ko"
// }
