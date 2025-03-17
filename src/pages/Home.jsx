import React from "react";
import Services from "../pages/Services";
import BloodDonation from "../pages/BloodDonation";
import BloodSearch from "./bloodsearch"; // Adjusted 
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* DNA Background Pattern */}
      <div className="dna-background"></div>
      
      {/* Main Content */}
      <div className="home-content container">
        <div className="hero-section">
          <h1 className="home-title">
            One Blood Donation Can Save <span className="highlight">Three</span> Lives
          </h1>
          <Link to="/login-donor" className="donate-now-btn">Donate Now</Link>
        </div>
        
        <BloodSearch />
        
        {/* Services & Blood Donation Side by Side */}
        <div className="home-sections">
          <div className="section-card">
            <Services />
          </div>
          <div className="section-card">
            <BloodDonation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;