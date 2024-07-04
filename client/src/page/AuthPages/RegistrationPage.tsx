import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import './styles/auth.css';
import { useAppDispatch } from '../../app/store/store';
import { registrationThunk } from '../../entities/users/authSlice';

function RegistrationPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password.trim() === checkPassword.trim()) {
      dispatch(registrationThunk({ name, email, password })).catch((error) => {
        console.log(error);
      });
      navigate('/');
    }
  };

  return (
    <form onSubmit={onHadleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Check password:
        <input
          type="password"
          name="password"
          required
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <br />
      <div className="button-container">
        <Button type="submit" theme={ThemeButton.PRIMARY}>
          Войти
        </Button>
        <Button type="button" theme={ThemeButton.PRIMARY}>
          <Link to="/authorization" className="login-button">
            Регистрация
          </Link>
        </Button>
      </div>
    </form>
  );
}

export default RegistrationPage;
