import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/#">
        React Movies
      </a>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customers" className="nav-link">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/rentals" className="nav-link">
              Rentals
            </NavLink>
          </li>
          {!user && (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </>
          )}
          {!!user && (
            <>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  {user.email}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
