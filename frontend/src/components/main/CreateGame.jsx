import React from 'react';

import styled from 'styled-components';

import SmallTitle from '../reusable/SmallTitle';
import ColumnCenterDiv from '../reusable/ColumnCenterDiv';
import PlusIcon from '../../../assets/icons/add.svg';

const CreateGameButton = styled.input`
  width: 700px;
  height: 150px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 12px;
  box-shadow: 5px 5px 15px #c5c5c5;
`;
const PlusIconWrapper = styled.div`
  width: 85px;
  position: absolute;
  top: 277px;
`;

export default function CreateGame() {
  return (
    <ColumnCenterDiv>
      <SmallTitle text="Create" />
      <CreateGameButton type="button" />
      <PlusIconWrapper>
        <PlusIcon />
      </PlusIconWrapper>
    </ColumnCenterDiv>
  );
}
