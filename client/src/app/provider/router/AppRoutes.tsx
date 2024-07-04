import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorizationPage from '../../../page/AuthPages/AuthorizationPage';
import RegistrationPage from '../../../page/AuthPages/RegistrationPage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/signIn" element={<AuthorizationPage />} />
      <Route path="/signUp" element={<RegistrationPage />} />
    </Routes>
  );
}

export default AppRoutes;
