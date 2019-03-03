import React from 'react';
import { NavLink } from 'react-router-dom'

const Menu = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/top">Top</NavLink>
      </li>
    </ul>

    <hr />

  </div>
);
  
export default Menu;  