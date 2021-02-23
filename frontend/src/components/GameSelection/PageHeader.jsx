import React from 'react';

import styled from 'styled-components';

const GameSelectionHeaderDiv = styled.div`
  font-family: Major Mono Display;
  margin: 40px;
  font-size: 105px;
  color: #000000;
  display: flex;
  justify-content: center;
`;

const GameSelectionHeader = () => <GameSelectionHeaderDiv> 게임 선택 </GameSelectionHeaderDiv>;

export default GameSelectionHeader;
