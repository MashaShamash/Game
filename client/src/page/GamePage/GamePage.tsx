

import React from 'react';
import './styles/gamePage.css';
import { RootState, useAppSelector } from '../../app/store/store';

function GamePage(): JSX.Element {
    const { games } = useAppSelector((state: RootState) => state.games);
console.log(games);

  return (
    <div className=" GamePage">
      <h1>Добро пожаловать</h1>
      <p>Игра находится в разработке</p>
      <div className='gameWrapper'>
        <div>
          <h1>Картинка Темы</h1>
          <h1>Картинка Темы</h1>
          <h1>Картинка Темы</h1>
        </div>
        <div>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
        </div>
        <div>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
        </div>
        <div>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
        </div>
        <div>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
        </div>
        <div>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
          <h1>Картинка</h1>
        </div>
      </div>
    </div>
  );
}

export default GamePage;

