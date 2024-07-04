import React from 'react';

import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar(): JSX.Element {
  let user = false;
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">main</NavLink>
        </li>
        {user ? (
          <li>
            <NavLink to="/">logout</NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/signIn">auth</NavLink>
            </li>
            <li>
              <NavLink to="/signUp">rega</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
