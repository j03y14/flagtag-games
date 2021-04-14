import React from 'react';

import styled from 'styled-components';

import FlagTagHeader from '../reusable/FlagtagHeader';
import CreateGame from './CreateGame';
import PublicGameSearch from './PublicGameSearch';
import PrivateGameEnter from './PrivateGameEnter';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Signin() {
  return (
    <>
      <FlagTagHeader />
      <MainWrapper>
        <CreateGame />
        <PublicGameSearch />
        <PrivateGameEnter />
      </MainWrapper>
    </>
  );
}
