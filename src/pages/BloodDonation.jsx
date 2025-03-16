import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BloodDonation.css";
import { personimg } from "../assets/img";

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

  return (
    <div className="blood-donation-container text-center">
      <h2 className="section-title">
        <span className="text-danger fw-bold">Blood</span> Donation Guide
      </h2>

      {/* Blood Type Selection */}
      <div className="blood-type-selection">
        <p>Select your Blood Type</p>
        <div className="blood-type-buttons">
          {Object.keys(bloodCompatibility).map((type) => (
            <button
              key={type}
              className={`blood-btn ${selectedType === type ? "active-btn" : ""}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Donation & Receiving Info */}
      <div className="blood-info-container">
        {/* Receiving Info */}
        <div className="info-box receive-box">
          <img src={personimg} alt="Receiver" className="icon-img" />
          <p className="info-title">You can receive from:</p>
          <p className="info-data">{bloodCompatibility[selectedType].receive.join(", ")}</p>
        </div>

        {/* Donation Info */}
        <div className="info-box donate-box">
          <img src={personimg} alt="Donor" className="icon-img" />
          <p className="info-title">You can donate to:</p>
          <p className="info-data">{bloodCompatibility[selectedType].donate.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default BloodDonation;
