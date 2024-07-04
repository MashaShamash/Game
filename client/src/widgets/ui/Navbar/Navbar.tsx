import React from 'react';

import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar(): JSX.Element {
  let user = false;
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Главная страница</NavLink>
        </li>
        {user ? (
          <li>
            <NavLink to="/">Выйти</NavLink>
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
