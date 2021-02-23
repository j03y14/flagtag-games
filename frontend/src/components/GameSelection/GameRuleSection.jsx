import React from 'react';
import styled from 'styled-components';

import Section from '@/components/GameSelection/Section';

const GameRuleContainer = styled.div`
  min-height: 300px;
  font-size: 40px;
  font-weight: normal;
`;

const GameRuleSection = ({ rule }) => {
  return (
    <Section title="게임 규칙">
      <GameRuleContainer>{rule}</GameRuleContainer>
    </Section>
  );
};

export default GameRuleSection;
