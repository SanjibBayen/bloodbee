import React from "react";
import { Link } from "react-router-dom";

const NavbarHome = ({ username }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container">
        {/* Logo / Brand */}
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
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
                <i className="fa-solid fa-info-circle me-1"></i> About
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search donors"
              aria-label="Search"
            />
            <button className="btn btn-light text-primary" type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>

          {/* Profile Dropdown */}
          <div className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link text-white"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-user me-1"></i> {username ? username : "Guest"}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              {username ? (
                <>
                  <li>
                    <Link className="dropdown-item" to="/profile">My Account</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-danger" to="/logout">Log Out</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to="/login">Login</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
