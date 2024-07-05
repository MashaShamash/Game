import React, { useEffect } from 'react';
import Navbar from '../widgets/ui/Navbar/Navbar';
import AppRoutes from './provider/router/AppRoutes';
import { type RootState, useAppDispatch, useAppSelector } from './store/store';
import { refreshTokens } from '../entities/users/authSlice';
import './styles/index.css';
import { gamesAllThunk } from '../entities/game/gameSlice';
import { getQuestionsThunk } from '../entities/question/questionSlice';

import { getAllThemeThunk } from '../entities/theme/themeSlice';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { questions } = useAppSelector((state: RootState) => state.questions);
  console.log(questions);
  
  useEffect(() => {
    void dispatch(getAllThemeThunk());
    dispatch(refreshTokens()).catch(console.log);
    void dispatch(gamesAllThunk())
    void dispatch(getQuestionsThunk())
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
