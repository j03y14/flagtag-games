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