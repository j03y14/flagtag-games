import React from 'react';

import GameSelectionItemContainer from '@components/GameSelection/GameSelectionItemContainer';
import Section from '@/components/GameSelection/Section';
import GameSelectionSlider from '@/components/GameSelection/GameSelectionSlider';

const GameSelectionSection = ({ gameList, selectedGame, setSelectedGame }) => {
  return (
    <Section title="게임선택">
      <GameSelectionItemContainer>
        <GameSelectionSlider {...{ gameList, selectedGame, setSelectedGame }} />
      </GameSelectionItemContainer>
    </Section>
  );
};

export default GameSelectionSection;
