import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';

const GameItem = lazy(() => import('@components/GameSelection/GameItem'));

const SliderDiv = styled.div`
  display: flex;
  width: 100%;
`;

const GAMEITEM_WIDTH = 750;

const GameSelectionSlider = ({ gameList, selectedGame, setSelectedGame }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const translateSlide = (amount) => {
    slideRef.current.style.transition = '';
    slideRef.current.style.transform = `translateX(${amount}px)`;
  };

  const translateSlideWithAnimation = (amount) => {
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    slideRef.current.style.transform = `translateX(${amount}px)`;
  };

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

  let touchStartX;

  const onSliderTouchStart = (event) => {
    const touchObject = event.changedTouches[0];
    touchStartX = touchObject.pageX;
  };

  const onSliderTouchMove = (event) => {
    const touchObject = event.changedTouches[0];
    const touchMoveX = touchObject.pageX;

    const diff = touchMoveX - touchStartX;

    translateSlide(-GAMEITEM_WIDTH * currentSlide + diff);
  };

  const onSliderTouchEnd = (event) => {
    const touchObject = event.changedTouches[0];
    const touchMoveX = touchObject.pageX;

    const diff = touchMoveX - touchStartX;
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    if (diff > GAMEITEM_WIDTH / 2) {
      prevSlide();
    } else if (diff < -GAMEITEM_WIDTH / 2) {
      nextSlide();
    } else {
      translateSlideWithAnimation(-GAMEITEM_WIDTH * currentSlide);
    }
  };

  useEffect(() => {
    translateSlideWithAnimation(-GAMEITEM_WIDTH * currentSlide);
  }, [currentSlide]);

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
