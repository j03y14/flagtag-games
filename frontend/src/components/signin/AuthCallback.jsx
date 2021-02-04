import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { oauthAPI } from '../../apis/auth';

export default function AuthCallback() {
  const history = useHistory();

  const getAccessToken = async (code) => {
    const { accessToken, userInfo } = await oauthAPI.getAccessToken(code);

    if (!accessToken) {
      alert('액세스 토큰 없음');
      return;
    }

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    history.push('/');
  };

  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    getAccessToken(query.get('code'));
  }, []);

  return <div />;
}
