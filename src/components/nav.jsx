import React, { Component } from 'react';
import './nav.css'
const NavBar = ({numOfCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <h3>
        <span className="badge badge-info">
          {numOfCounters}
        </span>
      </h3>
    </nav>
  );
}

export default NavBar;