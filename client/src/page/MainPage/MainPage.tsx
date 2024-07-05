import React from 'react';
import './styles/mainPage.css';
import { NavLink } from 'react-router-dom';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import { useAppSelector, type RootState } from '../../app/store/store';

function MainPage(): JSX.Element {
  const { user } = useAppSelector((state: RootState) => state.auth);
  console.log(user);
  return (
    <div className="MainPage">
      <h1>Главная страница</h1>
      {user ? (
        <NavLink to="/game">
          <Button type="button" theme={ThemeButton.PRIMARY}>
            Начать игру
          </Button>
        </NavLink>
      ) : (
        <h2>Для начала игры войдите или зарегистрируйтесь</h2>
      )}
    </div>
  );
}

export default MainPage;
