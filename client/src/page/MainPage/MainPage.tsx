import React from 'react';
import './styles/mainPage.css';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';

function MainPage(): JSX.Element {
    let user = false;

  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      {user && (
        <Button type='button' theme={ThemeButton.PRIMARY}>Выйти</Button>
      )}
    </div>
  );
}

export default MainPage;
