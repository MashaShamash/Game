import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorizationPage from '../../../page/AuthPages/AuthorizationPage';
import RegistrationPage from '../../../page/AuthPages/RegistrationPage';
import MainPage from '../../../page/MainPage/MainPage';

import GamePage from '../../../page/GamePage/GamePage';
import ErrorPage from '../../../page/ErrorPage/ErrorPage';
import ThemePage from '../../../page/ThemePage/ThemePage';


function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route path="/game" element={<GamePage />} />
 
      <Route path="/themes" element={<ThemePage />} />
             <Route path='*' element={<ErrorPage />} />

    </Routes>
  );
}

export default AppRoutes;
