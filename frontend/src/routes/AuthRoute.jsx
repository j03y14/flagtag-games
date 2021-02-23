import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import oauthAPI from '../apis/auth';

export default function AuthRoute({ path, exact = false, component }) {
  const [authenticated, setuthenticated] = useState(false);
  const history = useHistory();

  const authCheck = async () => {
    try {
      await oauthAPI.authCheck();
      setuthenticated(true);
    } catch (error) {
      history.push('/signin');
      alert('인증 실패했습니다. 다시 시도해주세요');
    }
  };

  useEffect(() => {
    authCheck();
  }, []);

  return <Route exact={exact} path={path} component={authenticated && component} />;
}
