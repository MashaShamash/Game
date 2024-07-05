import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorizationPage from '../../../page/AuthPages/AuthorizationPage';
import RegistrationPage from '../../../page/AuthPages/RegistrationPage';
import MainPage from '../../../page/MainPage/MainPage';
import ThemePage from '../../../page/ThemePage/ThemePage';
import GamePage from '../../../page/GamePage/GamePage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/games" element={<GamePage />} />
    </Routes>
  );
}

export default AppRoutes;
