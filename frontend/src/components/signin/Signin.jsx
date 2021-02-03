import React from 'react';

import styled from 'styled-components';

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
export default function Signup() {
  // const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.CLIENT_URL}/callback`;
  const clickLoginButton = () => {
    // window.location.href = url;
    console.log('로그인');
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
