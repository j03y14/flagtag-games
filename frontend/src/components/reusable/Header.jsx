import React from 'react';

import styled from 'styled-components';

const FlagTagHeader = styled.div`
  font-family: Major Mono Display;
  margin: 40px;
  font-size: 105px;
  color: #000000;
  display: flex;
  justify-content: center;
`;

const Header = () => <FlagTagHeader> FLAGTAG GAMES </FlagTagHeader>;

export default Header;
