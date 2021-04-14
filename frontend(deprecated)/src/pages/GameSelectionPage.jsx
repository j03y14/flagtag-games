import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import PageHeader from '@/components/GameSelection/PageHeader';
import GameSelectionSection from '@components/GameSelection/GameSelectionSection';
import GameRuleSection from '@components/GameSelection/GameRuleSection';
import gameTypeApi from '@apis/gameType';

const SubmitButton = styled.button`
  width: 200px;
  height: 100px;
  font-size: 40px;
  background: #5db075;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  color: #ffffff;
`;

const GameSelectionPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  width: 100%;
`;

const GameSelectionPage = () => {
  const [gameList, setGameList] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});
  const history = useHistory();

  const onSubmitButtonClicked = () => {
    if (!selectedGame.id) {
      alert('게임을 선택해주세요.');
      return;
    }

    history.push('/');
  };

  useEffect(async () => {
    const gameTypes = await gameTypeApi.getAllGameTypes();
    setGameList(gameTypes);
  }, []);

  return (
    <GameSelectionPageDiv>
      <PageHeader />

      <GameSelectionSection
        gameList={gameList}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      <GameRuleSection rule={selectedGame.rule} />

      <SubmitButton onClick={onSubmitButtonClicked}>확인</SubmitButton>
    </GameSelectionPageDiv>
  );
};

export default GameSelectionPage;
