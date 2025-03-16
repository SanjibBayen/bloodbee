import React from "react";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container d-flex flex-row align-items-center">
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
        <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <i className="fa-solid fa-house me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/donate">
                <i className="fa-solid fa-hand-holding-heart me-1"></i> Donate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/requests">
                <i className="fa-solid fa-list me-1"></i> Blood Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                <i class="fa-solid fa-info-circle me-1"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
