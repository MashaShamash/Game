import React, { useEffect } from 'react';
import './styles/gamePage.css';
import { type RootState, useAppSelector, useAppDispatch } from '../../app/store/store';
import ThemePage from '../ThemePage/ThemePage';
import { getGameLineThunk } from '../../entities/gameLine/gameLineSlice';
import { gameStartThunk } from '../../entities/game/gameSlice';

function GamePage(): JSX.Element {

  return (
    <div className="GamePage">
      <h1>Игра началась</h1>
      <ThemePage />
    </div>
  );
}

export default GamePage;
