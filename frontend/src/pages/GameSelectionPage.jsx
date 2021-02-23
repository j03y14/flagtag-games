import React, { useEffect, useState } from 'react';

import PageHeader from '@/components/GameSelection/PageHeader';
import GameSelectionSection from '@components/GameSelection/GameSelectionSection';
import GameRuleSection from '@components/GameSelection/GameRuleSection';
import gameTypeApi from '@apis/gameType';

const GameSelectionPage = () => {
  const [gameList, setGameList] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});

  useEffect(async () => {
    const gameTypes = await gameTypeApi.getAllGameTypes();
    setGameList(gameTypes);
  }, []);

  return (
    <div>
      <PageHeader />

      <GameSelectionSection
        gameList={gameList}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      <GameRuleSection rule={selectedGame.rule} />
    </div>
  );
};

export default GameSelectionPage;
