import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from './Elements';

const Navbar = ({ username, homeColor = 'white', appointmentsColor = 'white', profileColor = 'white' }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">Bloodbee</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link text-${homeColor}`} to="/home-donor">
                <i className="fa-solid fa-house p-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${appointmentsColor}`} to="/appointments-donor">
                <i className="fa-solid fa-calendar-check p-1"></i> Appointments
              </Link>
            </li>
          </ul>

          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-light text-primary" type="submit">Search</button>
          </form>

          <Dropdown username={username} profileColor={profileColor} profileRoute={'/profile-donor'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
