import React from 'react';
import styled from 'styled-components';

import KaKaoSignInButton from './KakaoSignInButton';
import GoogleSignInButton from './GoogleSignInButton';

const SocialLogin = styled.div`
  display: block;
  position: absolute;
  left: 14%;
  top: 35%;
`;

export default function Signin() {
  return (
    <SocialLogin>
      <KaKaoSignInButton />
      <GoogleSignInButton />
    </SocialLogin>
  );
}
