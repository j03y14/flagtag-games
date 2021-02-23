import React from 'react';
import styled from 'styled-components';

import SectionTitle from '@/components/GameSelection/SectionTitle';

const SectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
`;

const Section = ({ title, children }) => {
  return (
    <SectionDiv>
      <SectionTitle title={title} />
      {children}
    </SectionDiv>
  );
};

export default Section;
