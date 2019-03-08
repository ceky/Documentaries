import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Menu = () => (
  <header className="menu-container">
    <ul className="menu-list">
      <li>
        <NavLink to="/movies" className="menu-item">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/top" className="menu-item">Top</NavLink>
      </li>
    </ul>
  </header>
);
  
export default Menu;  