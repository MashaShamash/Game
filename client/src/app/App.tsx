import React, { useEffect } from 'react';
import Navbar from '../widgets/ui/Navbar/Navbar';
import AppRoutes from './provider/router/AppRoutes';
import { useAppDispatch } from './store/store';
import { refreshTokens } from '../entities/users/authSlice';
import './styles/index.css';
import { gamesAllThunk } from '../entities/game/gameSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshTokens()).catch(console.log);
    void dispatch(gamesAllThunk())
  }, [dispatch]);
  
  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
