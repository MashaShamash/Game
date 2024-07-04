import React from 'react';
import './styles/mainPage.css';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';

function MainPage(): JSX.Element {
    let user = true;

  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      {user && (
        <Button type='button' theme={ThemeButton.PRIMARY}>Начать игру</Button>
      )}
    </div>
  );
}

export default MainPage;
