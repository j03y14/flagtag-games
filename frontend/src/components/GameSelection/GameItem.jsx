import React from 'react';
import styled from 'styled-components';

const GameItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  align-items: center;
  width: 300px;
  height: 370px;
  margin: 0 20px 0 0;
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
  flex: 1;
  font-size: 25px;
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
