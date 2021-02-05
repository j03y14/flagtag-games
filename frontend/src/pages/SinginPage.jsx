import React from 'react';
import { Redirect } from 'react-router-dom';

import Signin from '../components/signin/Signin';
import FlagTagHeader from '../components/reusable/FlagtagHeader';

export default function SigninPage() {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <FlagTagHeader />
      <Signin />
    </>
  );
}
