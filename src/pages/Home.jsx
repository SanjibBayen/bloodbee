import React from "react";
import { NavbarHome, Footer } from "../components/Elements";
import Services from "../pages/Services";
import BloodDonation from "../pages/BloodDonation";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      {/* <NavbarHome /> */}

      {/* Main Content */}
      <div className="home-content container text-center">
        <h1 className="home-title">
          One Blood Donation Can Save <span className="highlight">Three</span> Lives
        </h1>

        {/* Services & Blood Donation Side by Side */}
        <div className="home-sections row">
          <div className="col-md-6">
            <Services />
          </div>
          <div className="col-md-6">
            <BloodDonation />
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
