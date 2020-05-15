import React, { Component } from 'react';
import './nav.css'
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <h3>
        <span class="badge badge-info">
          {props.numOfCounters}
        </span>
      </h3>
    </nav>
  );
}

export default NavBar;