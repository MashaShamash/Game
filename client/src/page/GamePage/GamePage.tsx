import React, { useEffect } from 'react';
import './styles/gamePage.css';
import { type RootState, useAppSelector, useAppDispatch } from '../../app/store/store';
import { gameStartThunk } from '../../entities/game/gameSlice';
import ThemePage from '../ThemePage/ThemePage';

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
        <ThemePage />
      </div>
    </div>
  );
}

export default GamePage;
