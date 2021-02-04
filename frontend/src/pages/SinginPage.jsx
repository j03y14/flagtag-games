import React from 'react';
import { Redirect } from 'react-router-dom';

import Signin from '../components/signin/Signin';
import Header from '../components/reusable/header';

export default function SigninPage() {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Signin />
    </>
  );
}
