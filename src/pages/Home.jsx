import React from "react";
import { Navbar, Footer } from "../components/Elements";
import Services from "../pages/Services";
import BloodDonation from "../pages/BloodDonation";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar username="John Doe" appointmentsColor="primary" />
      
      {/* Main Content */}
      <div className="container text-center p-4">
        
        {/* <h1 className="mt-2 text-muted fw-bold">
          Welcome to <span className="text-danger">Blood</span>Bee
        </h1> */}
        
        {/* Styled Hero Message */}
        <div className="hero-message row d-flex justify-content-center align-items-center h-auto">
          <p className="h1 text-muted">
            One Blood Donation can save up to{" "}
            <span className="text-danger fw-bold">Three</span> Lives
          </p>
            {/* Services Section */}
        <div className="mt-4">
          <Services />
        </div>
        </div>
      </div>

      
      <div className="content"></div>
      {/* Blood Donation Info Section */}
      
      <BloodDonation />
      <div className="content"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
