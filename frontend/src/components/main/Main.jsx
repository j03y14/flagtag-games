import React from 'react';

import styled from 'styled-components';

import Header from '../reusable/Header';
import CreateGame from './CreateGame';
import PublicGameSearch from './PublicGameSearch';
import PrivateGameEnter from './PrivateGameEnter';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Signin() {
  return (
    <>
      <Header />
      <MainWrapper>
        <CreateGame />
        <PublicGameSearch />
        <PrivateGameEnter />
      </MainWrapper>
    </>
  );
}
