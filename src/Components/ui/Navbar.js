import React from "react";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from '../../asincrono/authActionAsinc';
import { useDispatch, useSelector } from "react-redux";


export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">

            <li className="nav-item">
              <span className="nav-item nav-link text-info">{name}</span>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dc"
              >
                DC
              </NavLink>
            </li>
            <li className="nav-item">

              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="w-100 d-flex justify-content-end align-items-center">
            <button className="nav-item nav-link btn d-flex justify-content-center align-items-center " onClick={handleLogout}>
              <i className="fas fa-sign-out-alt fs-3"></i>Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

