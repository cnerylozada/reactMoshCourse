import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">React Movies</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Rentals</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;