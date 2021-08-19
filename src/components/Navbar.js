import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../components/images/fondo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <img src={logo} alt={logo} />
        <div className="navbar-brand">
          <Link exact to="/" className="nav-link">
            Pearson Specter
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/nosotros" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/servicios" className="nav-link">
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink exact to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};
