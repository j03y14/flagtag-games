/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

const STT = styled.div`
  color: black;
  font-size: 80px;
  margin: 70px;
`;

export default function SmallTitle({ text }) {
  return <STT>{text}</STT>;
}
