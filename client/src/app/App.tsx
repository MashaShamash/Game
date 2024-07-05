import React, { useEffect } from 'react';
import Navbar from '../widgets/ui/Navbar/Navbar';
import AppRoutes from './provider/router/AppRoutes';
import { refreshTokens } from '../entities/users/authSlice';
import './styles/index.css';
import { getAllThemeThunk } from '../entities/theme/themeSlice';
import { getGameLineThunk } from '../entities/gameLine/gameLineSlice';
import store, { useAppDispatch } from './store/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  // const dispatch = useAppDispatch();
  
  useEffect(() => {
    void dispatch(getAllThemeThunk())
    void dispatch(getGameLineThunk());
    dispatch(refreshTokens()).catch(console.log);
  }, [dispatch]);
  
  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
