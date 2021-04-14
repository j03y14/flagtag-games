import React from 'react';
import styled from 'styled-components';

const GameItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  align-items: center;
  width: 700px;
  height: 820px;
  margin: 0 50px 0 0;
  background: #ffffff;
  box-shadow: 0px 6px 18px 2px
    ${(props) => (!!props.selected ? 'rgb(251 118 61 / 56%)' : 'rgb(0 0 0 / 25%)')};
  border-radius: 5px;
`;

const GameItemImg = styled.img`
  box-sizing: border-box;
  margin: 3%;
  width: 96%;
  object-fit: cover;
`;

const GameNameDiv = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 50px;
  border-top: 1px solid #b1afaf;
  justify-content: center;
  align-items: center;
`;

const GameItem = ({ name, image, rule, selected, id, setSelectedGame }) => {
  const onClickGameItem = (event) => {
    setSelectedGame({ id, name, image, rule });
  };

  return (
    <GameItemContainer selected={selected} onClick={onClickGameItem}>
      <GameItemImg src={image} />
      <GameNameDiv>{name}</GameNameDiv>
    </GameItemContainer>
  );
};

export default GameItem;
