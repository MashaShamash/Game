import React, { useState } from 'react';
import './styles/mainPage.css';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import { useAppSelector, type RootState } from '../../app/store/store';
import ThemePage from '../ThemePage/ThemePage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gameStartThunk } from '../../entities/game/gameSlice';

function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { user } = useAppSelector((state: RootState) => state.auth);
  
  const  onHandleCreate = (e): void => {
    e.preventDefault();
    void dispatch(gameStartThunk());
    navigate('/game');
  }
  return (
    <div className="MainPage">
      <h1>Main Page</h1>

      {user ? (
        <>
          <Button
            type="button"
            theme={ThemeButton.PRIMARY}
            onClick={onHandleCreate}
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
