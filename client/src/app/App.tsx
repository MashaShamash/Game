import React, { useEffect } from 'react';
import Navbar from '../widgets/ui/Navbar/Navbar';
import AppRoutes from './provider/router/AppRoutes';
import { useAppDispatch } from './store/store';
import { refreshTokens } from '../entities/users/authSlice';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
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
