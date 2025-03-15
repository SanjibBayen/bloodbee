import React from 'react';
import { logo1 } from '../assets/img'; 
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components/Elements';
import Services from "../pages/Services";
import BloodDonation from "../pages/BloodDonation";
import './Home.css'; 
import { NavbarBrand } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
      <p className="h1 mt-2 text-muted text-right">
                        <span className="text-danger fw-bold">Blood</span> Bee
                        </p>  
      <Navbar username="John Doe" appointmentsColor={'primary'} />
      <div className="home-container text-center p-3 container-md">
        <div id="intro-example" className="home-bg-image text-center align-items-center">
          <section>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black home-card" style={{ borderRadius: '25px' }}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <p className="h1 mt-2 text-muted">
                          One Blood Donation can save up to <span className="text-danger fw-bold">Three</span> Lives
                        </p>
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          {/* <div className="text-black">
                            <h5 className="mb-3">
                              Join us in saving lives and bringing joy to families with your generous blood donation.
                            </h5>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Services />
                <BloodDonation />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default Home;