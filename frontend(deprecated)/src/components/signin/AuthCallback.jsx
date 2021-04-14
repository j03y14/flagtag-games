import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import oauthAPI from '../../apis/auth';

export default function AuthCallback({ social }) {
  const history = useHistory();
  const location = useLocation();

  const getAccessToken = async (code) => {
    try {
      const { userInfo } = await oauthAPI.getAccessToken(social, code);
      window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
      history.push('/');
    } catch (error) {
      alert('로그인에 실패했습니다. 다시 시도해주세요');
      history.push('/signin');
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    getAccessToken(query.get('code'));
  }, [location, social]);

  return <div />;
}
