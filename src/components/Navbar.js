import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../components/images/fondo.png";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Guio Barrera
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/nosotros"
                className="nav-link"
                activeClassName="active"
                onClick={handleClick}
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/servicios"
                className="nav-link"
                activeClassName="active"
                onClick={handleClick}
              >
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contacto"
                className="nav-link"
                activeClassName="active"
                onClick={handleClick}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};
