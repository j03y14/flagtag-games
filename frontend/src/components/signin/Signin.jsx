import React from 'react';

import styled from 'styled-components';

const REST_API_KEY = 'f45308ab11b15215f3cf01b2f2773b18';
const REDIRECT_URI = 'http://localhost:8080/callback';

const SocialLogin = styled.div`
  display: block;
  position: absolute;
  left: 14%;
  top: 35%;
`;
const Button = styled.button`
  margin: 10px;
  padding: 5px 16px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e1e4e8;
  font-size: 55px;
  font-weight: 600;
  background-color: #faea32;
`;
export default function Signin() {
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const clickLoginButton = () => {
    window.location.href = url;
  };

  return (
    <SocialLogin>
      <Button type="button" onClick={clickLoginButton}>
        카카오 로그인
      </Button>
      <Button type="button" onClick={clickLoginButton}>
        구글 로그인
      </Button>
    </SocialLogin>
  );
}
