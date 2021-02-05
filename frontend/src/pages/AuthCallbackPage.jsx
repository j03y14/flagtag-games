import React from 'react';
import AuthCallback from '../components/signin/AuthCallback';

const AuthCallbackPage = ({ match }) => {
  const { social } = match.params;
  return <AuthCallback social={social} />;
};

export default AuthCallbackPage;
