import React from 'react';

import styled from 'styled-components';

import SmallTitle from '../reusable/SmallTitle';
import ColumnCenterDiv from '../reusable/ColumnCenterDiv';

const PublicGameSearchButton = styled.input.attrs({
  type: 'button',
  value: '게임 선택',
})`
  width: 80%;
  height: 200px;
  border: none;
  background-color: white;
  border-bottom: 2px solid black;
  font-size: 50px;
  font-weight: 700;
`;

export default function PublicGameSearch() {
  return (
    <ColumnCenterDiv>
      <SmallTitle text="Public" />
      <PublicGameSearchButton />
    </ColumnCenterDiv>
  );
}
