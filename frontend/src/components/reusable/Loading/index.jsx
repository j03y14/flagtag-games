import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SpinnerSVG } from '@assets/icons/spinner.svg';

import { TRANSPARNET_BLACK, ORANGE } from '@config/style/color';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${TRANSPARNET_BLACK};
  position: ${(props) => props.position};
  z-index: 10;
`;

const Loading = ({ width = '100vw', height = '100vh', position = 'fixed' }) => {
  return (
    <Background width={width} height={height} position={position}>
      <SpinnerSVG fill={ORANGE} />
    </Background>
  );
};

export default Loading;
