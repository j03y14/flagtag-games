import React from 'react';

import SignInButton from '../reusable/SignInButton';

const KaKaoSignInButton = () => {
  const host = process.env.KAKAO_OAUTH_HOST;
  const clientId = process.env.KAKAO_CLIENT_ID;
  const redirectUri = `${process.env.REDIRECT_URI}/kakao`;

  const url = `${host}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  const onKakaoSignInButtonClicked = () => {
    window.location.href = url;
  };

  return <SignInButton onClick={onKakaoSignInButtonClicked}>카카오 로그인</SignInButton>;
};

export default KaKaoSignInButton;
