import { useState, useRef, useEffect } from 'react';

const useSlider = ({ itemWidth, slideLength }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  let touchStartX;

  const translateSlideWithAnimation = (amount) => {
    slideRef.current.style.transition = 'transform 0.3s ease-in-out';
    slideRef.current.style.transform = `translateX(${-itemWidth * amount}px)`;
  };

  const nextSlide = (currentSlide) => {
    if (currentSlide < slideLength - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      translateSlideWithAnimation(currentSlide);
    }
  };
  const prevSlide = (currentSlide) => {
    if (currentSlide === 0) {
      translateSlideWithAnimation(currentSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onSliderTouchStart = (event) => {
    const touchObject = event.changedTouches[0];
    touchStartX = touchObject.pageX;
    slideRef.current.style.transition = '';
  };

  const onSliderTouchMove = ({ event, currentSlide, itemWidth }) => {
    const touchObject = event.changedTouches[0];
    const touchMoveX = touchObject.pageX;

    const diff = touchMoveX - touchStartX;

    slideRef.current.style.transform = `translateX(${-itemWidth * currentSlide + diff}px)`;
  };

  const onSliderTouchEnd = ({ event, currentSlide, itemWidth }) => {
    const touchObject = event.changedTouches[0];
    const touchMoveX = touchObject.pageX;

    const diff = touchMoveX - touchStartX;
    slideRef.current.style.transition = 'all 0.3s ease-in-out';
    if (diff > itemWidth / 2) {
      prevSlide(currentSlide);
    } else if (diff < -itemWidth / 2) {
      nextSlide(currentSlide);
    } else {
      translateSlideWithAnimation(currentSlide);
    }
  };

  useEffect(() => {
    translateSlideWithAnimation(currentSlide);
  }, [currentSlide]);

  return {
    onSliderTouchStart,
    onSliderTouchMove: (event) => onSliderTouchMove({ event, currentSlide, itemWidth }),
    onSliderTouchEnd: (event) => onSliderTouchEnd({ event, currentSlide, itemWidth }),
    translateSlideWithAnimation,
    currentSlide,
    setCurrentSlide,
    slideRef,
  };
};

export default useSlider;
