import React from 'react';
import styled from 'styled-components';

import SectionTitle from '@/components/GameSelection/SectionTitle';

const SectionDiv = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  font-weight: 600;
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
