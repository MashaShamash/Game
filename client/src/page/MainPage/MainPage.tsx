import React from 'react';
import './styles/mainPage.css';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import { useAppSelector, type RootState } from '../../app/store/store';

function MainPage(): JSX.Element {
  const { user } = useAppSelector((state: RootState) => state.auth);

  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      {user ? (
        <Button type='button' theme={ThemeButton.PRIMARY}>Начать игру</Button>
      ) : <h2>Для начала игры войдите или зарегистрируйтесь</h2>}
    </div>
  );
}

export default MainPage;
