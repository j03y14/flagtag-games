import React, { Suspense, lazy } from 'react';

import GameSelectionItemContainer from '@components/GameSelection/GameSelectionItemContainer';
import Section from '@/components/GameSelection/Section';
const GameItem = lazy(() => import('@components/GameSelection/GameItem'));

const GameSelectionSection = ({ gameList, selectedGame, setSelectedGame }) => {
  return (
    <Section title="게임선택">
      <GameSelectionItemContainer>
        {gameList.map(({ name, image, _id: id, rule }) => (
          <Suspense key={id} fallback={<div>...loading</div>}>
            <GameItem
              name={name}
              image={image}
              rule={rule}
              id={id}
              selected={id === selectedGame.id}
              setSelectedGame={setSelectedGame}
            />
          </Suspense>
        ))}
      </GameSelectionItemContainer>
    </Section>
  );
};

export default GameSelectionSection;
