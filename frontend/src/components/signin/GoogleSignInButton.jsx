import React from 'react';

import SignInButton from '../reusable/SignInButton';

const GoogleSignInButton = () => {
  const host = process.env.GOOGLE_OAUTH_HOST;
  const scopeProfileUrl = process.env.GOOGLE_OAUTH_SCOPE_PROFILE;
  const scopeEmailUrl = process.env.GOOGLE_OAUTH_SCOPE_EMAIL;
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = `${process.env.REDIRECT_URI}/google`;

  const url = `${host}?scope=${scopeProfileUrl} ${scopeEmailUrl}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  const onGoogleSignInButtonClicked = () => {
    window.location.href = url;
  };

  return <SignInButton onClick={onGoogleSignInButtonClicked}>구글 로그인</SignInButton>;
};

export default GoogleSignInButton;
