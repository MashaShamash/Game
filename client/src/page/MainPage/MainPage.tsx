import React, { useState } from 'react';
import './styles/mainPage.css';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import { useAppSelector, type RootState } from '../../app/store/store';
import ThemePage from '../ThemePage/ThemePage';
import { useNavigate } from 'react-router-dom';

function MainPage(): JSX.Element {
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const { user } = useAppSelector((state: RootState) => state.auth);
  console.log(user);
  return (
    <div className="MainPage">
      <h1>Main Page</h1>

      {user ? (
        <>
          <Button
            type="button"
            theme={ThemeButton.PRIMARY}
            onClick={navigate('/game')}
          >
            Начать игру
          </Button>
          {active && <ThemePage />}
        </>

   
      ) : (
        <h2>Для начала игры войдите или зарегистрируйтесь</h2>
      )}
    </div>
  );
}

export default MainPage;
