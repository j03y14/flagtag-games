import React from 'react';

import Signin from '@components/SignIn';
import FlagTagHeader from '@components/reusable/Header';
import { Container } from './styled';

export default function SigninPage() {
  return (
    <Container>
      <FlagTagHeader />
      <Signin />
    </Container>
  );
}
