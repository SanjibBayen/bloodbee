import React from 'react';

const NavbarHome = ({ username, homeColor, appointmentsColor, profileColor }) => {
    const defaultTextColor = "white"; 
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  };
  return (
    <div className="navbar-home">
      <nav className="navbar navbar-expand-lg bg-primary sticky-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <p className="h2 text-muted">
           Bloodbee
          </p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <form className="d-flex ps-3 pe-1" role="search" onSubmit={handleSubmit}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success text-white" type="submit">Search</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;