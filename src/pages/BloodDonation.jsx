import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BloodDonation.css"; 
import { personimg } from '../assets/img';

const bloodCompatibility = {
  "A+": { donate: ["A+", "AB+"], receive: ["O+", "O-", "A+", "A-"] },
  "O+": { donate: ["O+", "A+", "B+", "AB+"], receive: ["O+", "O-"] },
  "B+": { donate: ["B+", "AB+"], receive: ["O+", "O-", "B+", "B-"] },
  "AB+": { donate: ["AB+"], receive: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+"] },
  "A-": { donate: ["A+", "A-", "AB+", "AB-"], receive: ["O-", "A-"] },
  "O-": { donate: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], receive: ["O-"] },
  "B-": { donate: ["B+", "B-", "AB+", "AB-"], receive: ["O-", "B-"] },
  "AB-": { donate: ["AB+", "AB-"], receive: ["O-", "A-", "B-", "AB-"] },
};

const BloodDonation = () => {
  const [selectedType, setSelectedType] = useState("A+");

  const handleSelection = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="container text-center mt-5 blood-donation-container">
      <h2 className="text-danger fw-bold fs-1 text-muted"> <span className="text-danger fw-bold">Blood</span> Donation Guide</h2>

      {/* Blood Type Selection */}
      <div className="mb-4">
        <p className="fw fs-5 justify-content-left">Select your Blood Type</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {Object.keys(bloodCompatibility).map((type) => (
            <button
              key={type}
              className={`btn btn-lg blood-btn custom-btn ${selectedType === type ? "active-btn" : ""}`}
              onClick={() => handleSelection(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="row mt-5 justify-content-center align-items-center blood-info-row">
        {/* Receiving Info */}
        <div className="col-md-5">
          <div className="p-4 rounded text-dark receive-box">
            <img src={personimg} alt="Receiver" className="icon-img" />
            <p className="fw-bold fs-3 text-muted">You can take from</p>
            <p className="fs-5 text-muted fw-bold">{bloodCompatibility[selectedType].receive.join(" , ")}</p>
          </div>
        </div>

        {/* Donation Info */}
        <div className="col-md-5">
          <div className="p-4 rounded text-white donate-box">
            <img src={personimg} alt="Donor" className="icon-img" />
            <p className="fw-bold fs-3 text-muted">You can give to</p>
            <p className="fs-5 text-muted fw-bold">{bloodCompatibility[selectedType].donate.join(" , ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodDonation;
