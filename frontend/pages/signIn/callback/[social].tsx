import React, { useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { useRouter, NextRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import oauthAPI from '@apis/auth';
import FlagTagHeader from '@components/reusable/Header';
import { Container } from './styled';
import { userState } from '@store/user';

interface AuthCallbackInterface {
  social: string;
  code: string;
}

export default function AuthCallback() {
  const router: NextRouter = useRouter();
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const getAccessToken = async ({
      code,
      social,
      router,
    }: AuthCallbackInterface & { router: NextRouter }) => {
      try {
        const { userInfo } = await oauthAPI.getAccessToken({ social, code });
        setUser(userInfo);

        router.replace('/');
      } catch (error) {
        console.error(error);

        alert('로그인에 실패했습니다. 다시 시도해주세요');
        router.replace('/signIn');
      }
    };
    const { code, social } = router.query;

    if (code && social) {
      getAccessToken({ code, social, router });
    }
  }, [router]);

  return (
    <Container>
      <FlagTagHeader />
      <Loader type="Circles" color="#000000" height={100} width={100} />
    </Container>
  );
}
