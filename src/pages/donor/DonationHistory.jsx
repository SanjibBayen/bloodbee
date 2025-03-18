import React from "react";
import { Link } from "react-router-dom";

const donationRecords = [
  { id: 1, date: "2024-01-15", location: "City Hospital", bloodType: "O+", status: "Completed" },
  { id: 2, date: "2024-02-20", location: "Red Cross Center", bloodType: "A-", status: "Completed" },
  { id: 3, date: "2024-03-10", location: "Community Health Clinic", bloodType: "B+", status: "Completed" },
  { id: 4, date: "2024-04-05", location: "General Hospital", bloodType: "AB+", status: "Completed" },
];

const DonationHistory = () => {
  return (
    <div className="container-md text-center p-3">
      <div className="text-center bg-image align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5">
                        <p className="text-center h1 fw-bold mb-5">Donation History</p>
                        <div className="row">
                          {donationRecords.map((record) => (
                            <div key={record.id} className="col-md-12 mb-3">
                              <div className="card shadow-sm" style={{ borderRadius: "15px" }}>
                                <div className="card-body">
                                  <h5 className="card-title">{record.location}</h5>
                                  <p className="card-text mb-1"><strong>Date:</strong> {record.date}</p>
                                  <p className="card-text mb-1"><strong>Blood Type:</strong> {record.bloodType}</p>
                                  <span className={`badge ${record.status === "Completed" ? "bg-success" : "bg-warning"}`}>{record.status}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                          {/* <Link to="/">
                            <button className="btn btn-danger btn-lg">Back to Home</button>
                          </Link> */}
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
};

export default DonationHistory;