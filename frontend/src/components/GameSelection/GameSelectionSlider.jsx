import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';

import useSlider from '@hooks/useSlider';

const GameItem = lazy(() => import('@components/GameSelection/GameItem'));

const SliderDiv = styled.div`
  display: flex;
  width: 100%;
`;

const GameSelectionSlider = ({ gameList, selectedGame, setSelectedGame }) => {
  const GAMEITEM_WIDTH = 320;
  const { onSliderTouchStart, onSliderTouchMove, onSliderTouchEnd, slideRef } = useSlider({
    itemWidth: GAMEITEM_WIDTH,
    slideLength: gameList.length,
  });

  return (
    <>
      <SliderDiv
        ref={slideRef}
        onTouchStart={onSliderTouchStart}
        onTouchMove={onSliderTouchMove}
        onTouchEnd={onSliderTouchEnd}
      >
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
      </SliderDiv>
    </>
  );
};

export default GameSelectionSlider;
