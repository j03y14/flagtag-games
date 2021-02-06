import React, { useEffect, useState } from 'react';

import GameSelectionItemContainer from '@components/GameSelection/GameSelectionItemContainer';
import Section from '@/components/GameSelection/Section';
import GameItem from '@components/GameSelection/GameItem';

const GameSelectionSection = ({ gameList, selectedGame, setSelectedGame }) => {
  return (
    <Section title="게임선택">
      <GameSelectionItemContainer>
        {gameList.map(({ name, image, _id: id, rule }) => (
          <GameItem
            name={name}
            image={image}
            rule={rule}
            key={id}
            id={id}
            selected={id === selectedGame.id}
            setSelectedGame={setSelectedGame}
          />
        ))}
      </GameSelectionItemContainer>
    </Section>
  );
};

export default GameSelectionSection;
