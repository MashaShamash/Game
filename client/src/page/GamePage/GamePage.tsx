import React, { useEffect } from 'react';
import './styles/gamePage.css';
import { type RootState, useAppSelector, useAppDispatch } from '../../app/store/store';
import { gameStartThunk } from '../../entities/game/gameSlice';

function GamePage(): JSX.Element {
  const { currentGame } = useAppSelector((state: RootState) => state.currentGame);
  console.log(currentGame);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(gameStartThunk());
  }, []);
  return (
    <div className="GamePage">
      <div>
        <h1>Тема</h1>
      </div>
      <div></div>
    </div>
  );
}

export default GamePage;
