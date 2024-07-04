import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorizationPage from '../../../page/AuthPages/AuthorizationPage';
import RegistrationPage from '../../../page/AuthPages/RegistrationPage';
import MainPage from '../../../page/MainPage/MainPage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
}

export default AppRoutes;
