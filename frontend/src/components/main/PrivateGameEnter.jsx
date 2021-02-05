import React from 'react';

import styled from 'styled-components';

import SmallTitle from '../reusable/SmallTitle';
import ColumnCenterDiv from '../reusable/ColumnCenterDiv';

const PrivteGameCodeInput = styled.input.attrs({
  type: 'text',
})`
  width: 80%;
  height: 200px;
  border: none;
  background-color: white;
  border-bottom: 2px solid black;
  font-size: 100px;
  font-weight: 700;
`;
const PrivteGameEnterButton = styled.input.attrs({
  type: 'button',
  value: '입장',
})`
  width: 150px;
  height: 100px;
  border: none;
  border-radius: 10px;
  background-color: #5db075;
  font-size: 50px;
  font-weight: 700;
  position: absolute;
  bottom: 6%;
  right: 10%;
`;

export default function PrivteGameEnter() {
  return (
    <ColumnCenterDiv>
      <SmallTitle text="Private" />
      <PrivteGameCodeInput />
      <PrivteGameEnterButton />
    </ColumnCenterDiv>
  );
}
