import React from 'react';

import SignInButton from '@components/reusable/SignInButton';

const KaKaoSignInButton = () => {
  const host = process.env.KAKAO_OAUTH_HOST;
  const clientId = process.env.KAKAO_CLIENT_ID;
  const redirectUri = `${process.env.REDIRECT_URI}/kakao`;

  const ButtonImageUrl = '/images/kakaoLogin.png';

  const url = `${host}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  const onKakaoSignInButtonClicked = () => {
    window.location.href = url;
  };

  console.log(host, clientId, redirectUri);

  return (
    <SignInButton
      onClick={onKakaoSignInButtonClicked}
      backgroundImage={ButtonImageUrl}
    />
  );
};

export default KaKaoSignInButton;
