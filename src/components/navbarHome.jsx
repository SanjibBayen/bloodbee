import React from "react";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          <i className="bi bi-droplet-fill me-2"></i>LifeFlow
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                <i className="bi bi-info-circle-fill me-1"></i> About
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home-donor">
                <i className="bi bi-calendar-heart-fill me-1"></i> Blood Camps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/nearby-blood-banks">
                <i className="bi bi-geo-alt-fill me-1"></i> Blood Banks
              </Link>
            </li>
          </ul>
        </div>

        {/* Donate Blood Button */}
        <div className="d-flex">
          <Link className="btn btn-light text-danger fw-bold px-3" to="/login-donor">
            <i className="bi bi-heart-pulse-fill me-1"></i> Donate Blood
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
