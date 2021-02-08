import React from 'react';

import styled from 'styled-components';

const SectionTitleDiv = styled.title`
  font-family: Major Mono Display;
  margin-bottom: 40px;
  font-size: 40px;
  color: #000000;
  display: flex;
`;

const SectionTitle = ({ title }) => <SectionTitleDiv> {title} </SectionTitleDiv>;

export default SectionTitle;
