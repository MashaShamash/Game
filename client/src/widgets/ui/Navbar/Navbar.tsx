import React from 'react';

import { NavLink } from 'react-router-dom';
import type {RootState} from '../../../app/store/store'
import './Navbar.css';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { logoutThunk } from '../../../entities/users/authSlice';

function Navbar(): JSX.Element {
  const { user } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const onHandleLogout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault(); // отменяем переход по ссылке
    void dispatch(logoutThunk());
  };

  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Главная страница</NavLink>
        </li>
        {user ? (
          <li>
            <NavLink to="/" onClick={onHandleLogout}>
              Выйти
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/authorization">Авторизация</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Регистрация</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
