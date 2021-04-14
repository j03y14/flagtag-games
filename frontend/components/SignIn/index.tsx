import React from 'react';

import KaKaoSignInButton from './KakaoSignInButton';
import { SocialLoginButtonContainer } from './styled';

export default function Signin() {
  return (
    <SocialLoginButtonContainer>
      <KaKaoSignInButton />
    </SocialLoginButtonContainer>
  );
}
