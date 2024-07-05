

import React from 'react';
import './styles/gamePage.css';
import { type RootState, useAppSelector } from '../../app/store/store';

function GamePage(): JSX.Element {
    const { games } = useAppSelector((state: RootState) => state.games);
console.log(games);

  return (
<div className='GamePage'>
    <div>
      <h1>Тема</h1>
    </div>
</div>
  );
}

export default GamePage;

