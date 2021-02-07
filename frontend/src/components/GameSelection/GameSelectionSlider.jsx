import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';

const GameItem = lazy(() => import('@components/GameSelection/GameItem'));

const SliderDiv = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  width: 200px;
  height: 100px;
  font-size: 40px;
`;

const GameSelectionSlider = ({ gameList, selectedGame, setSelectedGame }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= gameList.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(gameList.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    slideRef.current.style.transform = `translateX(${-750 * currentSlide}px)`;
  }, [currentSlide]);

  return (
    <>
      <SliderDiv ref={slideRef}>
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
      <Button onClick={prevSlide}>이전</Button>
      <Button onClick={nextSlide}>다음</Button>
    </>
  );
};

export default GameSelectionSlider;
