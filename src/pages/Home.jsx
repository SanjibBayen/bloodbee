import React from 'react';
import { logo1 } from '../assets/img'; 
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container text-center p-3 container-md">
      <Link to="/">
        <img src={logo1} className="home-logo rounded" alt="Blood Donation Platform Logo" />
      </Link>
      <div id="intro-example" className="home-bg-image text-center align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black home-card" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-3 text-uppercase">Welcome to Bloodbee</p>
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <div className="text-black">
                          <h5 className="mb-3">
                            Join us in saving lives and bringing joy to families with your generous blood donation.
                          </h5>
                          <Link to="/login-donor" className="btn btn-outline-dark btn-lg m-1" role="button" rel="nofollow">Login Donor</Link>
                          <Link to="/login-staff" className="btn btn-outline-dark btn-lg m-1" role="button">Login Staff</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;