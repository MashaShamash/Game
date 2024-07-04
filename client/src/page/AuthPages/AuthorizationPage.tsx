import React, { useState } from 'react';
import './styles/auth.css';
import { useAppDispatch } from '../../app/store/store';
import { authorizationThunk } from '../../entities/users/authSlice';
import { useNavigate } from 'react-router-dom';

function AuthorizationPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(authorizationThunk({ email, password })).catch((error) => {
      console.log(error);
    });;
    navigate('/');
  };

  return (
    <form onSubmit={onHadleSubmit}>
      <input
        type="login"
        name="login"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Войти</button>
    </form>
  );
}

export default AuthorizationPage;
