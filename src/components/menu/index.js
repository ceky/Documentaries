import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Menu = () => (
  <header className="menu-container">
    <ul className="menu-list">
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/top">Top</NavLink>
      </li>
    </ul>
  </header>
);
  
export default Menu;  