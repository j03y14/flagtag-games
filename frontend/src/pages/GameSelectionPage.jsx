import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import PageHeader from '@/components/GameSelection/PageHeader';
import GameSelectionSection from '@components/GameSelection/GameSelectionSection';
import GameRuleSection from '@components/GameSelection/GameRuleSection';
import gameTypeApi from '@apis/gameType';
import Loading from '@components/reusable/Loading';

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  background: #5db075;
  border-radius: 11px;
  border: none;
  font-weight: bold;
  color: #ffffff;
  margin: 10px;
`;

const GameSelectionPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
