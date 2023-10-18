import { NavLink, Outlet } from "react-router-dom";
import React from 'react';
let activeStyle = {
  textDecoration: 'underline',
};

function Nav() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul className="nav-links">
        <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink>
        <NavLink to="/Colours" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Colours</NavLink>
      </ul>
    </nav>
    <Outlet />
    </>
  );
}

export default Nav;