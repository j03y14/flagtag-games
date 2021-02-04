import React from 'react';

import styled from 'styled-components';

import SmallTitle from '../reusable/SmallTitle';
import ColumnCenterDiv from '../reusable/ColumnCenterDiv';

const PrivteGameCodeInput = styled.input`
  width: 700px;
  height: 200px;
  border: none;
  background-color: white;
  border-bottom: 2px solid black;
  font-size: 100px;
  font-weight: 700;
`;
const PrivteGameEnterButton = styled.input`
  width: 150px;
  height: 100px;
  border: none;
  border-radius: 10px;
  background-color: #5db075;
  font-size: 50px;
  font-weight: 700;
  position: absolute;
  top: 330px;
  right: 100px;
`;

export default function PrivteGameEnter() {
  return (
    <ColumnCenterDiv>
      <SmallTitle text="Private" />
      <PrivteGameCodeInput type="text" />
      <PrivteGameEnterButton type="button" value="입장" />
    </ColumnCenterDiv>
  );
}
