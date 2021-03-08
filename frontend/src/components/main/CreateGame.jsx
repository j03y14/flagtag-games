import React from 'react';

import styled from 'styled-components';

import { ReactComponent as PlusIcon } from '@assets/icons/add.svg';
import SmallTitle from '../reusable/SmallTitle';
import ColumnCenterDiv from '../reusable/ColumnCenterDiv';

const CreateGameButton = styled.button`
  width: 80%;
  height: 150px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 12px;
  box-shadow: 5px 5px 15px #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CreateGame() {
  return (
    <ColumnCenterDiv>
      <SmallTitle text="Create" />
      <CreateGameButton>
        <PlusIcon width="85px" />
      </CreateGameButton>
    </ColumnCenterDiv>
  );
}
