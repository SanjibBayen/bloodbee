import React, { useState } from "react";
import BloodDonationUI from "../donor/BloodDonationUI";

const HomeDonor = ({ allCamps = [], successMessage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const campsPerPage = 6; // Number of camps per page
  const [newCamp, setNewCamp] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [campDetails, setCampDetails] = useState({
    camp_name: "",
    organizer: "",
    location: "",
    date: "",
    time: "",
    contact: "",
    email: "",
  });

  // Example ongoing camps
  const ongoingCamps = [
    {
      camp_name: "Life Savers Camp",
      organizer: "Red Cross",
      location: "Kolkata Medical College",
      date: "March 18, 2025",
      time: "10:00 AM - 4:00 PM",
      contact: "+91 98765 43210",
      email: "lifesavers@redcross.org",
    },
    {
      camp_name: "Hope Blood Drive",
      organizer: "Apollo Hospital",
      location: "Apollo Clinic, Salt Lake",
      date: "March 20, 2025",
      time: "9:00 AM - 3:00 PM",
      contact: "+91 91234 56789",
      email: "hopeblood@apollo.com",
    },
  ];

  // Get the camps for the current page
  const indexOfLastCamp = currentPage * campsPerPage;
  const indexOfFirstCamp = indexOfLastCamp - campsPerPage;
  const currentCamps = allCamps.slice(indexOfFirstCamp, indexOfLastCamp);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle registration
  const handleRegister = (event) => {
    event.preventDefault();
    alert("You have successfully registered for the blood camp!");
  };

  // Handle form input change
  const handleInputChange = (e) => {
    setCampDetails({ ...campDetails, [e.target.name]: e.target.value });
  };

  // Handle new camp creation
  const handleCreateCamp = (e) => {
    e.preventDefault();

    // Validate inputs
    if (
      !campDetails.camp_name ||
      !campDetails.organizer ||
      !campDetails.location ||
      !campDetails.date ||
      !campDetails.time ||
      !campDetails.contact ||
      !campDetails.email
    ) {
      alert("All fields are required!");
      return;
    }

    setNewCamp(campDetails);
    setShowModal(false); // Close modal
    alert("New Blood Camp Created Successfully!");
  };

  return (
    <div>
      {/* Success Message */}
      {successMessage && (
        <p className="text-center alert alert-success" id="myAlert">
          <strong>{successMessage}</strong>
        </p>
      )}

      {/* Ongoing Blood Camps */}
      <div className="container mt-5">
        <h2 className="text-center text-primary">🔴 Ongoing Blood Donation Camps</h2>
        <p className="text-center text-muted">Currently active camps where you can donate blood.</p>

        <div className="row">
          {ongoingCamps.map((camp, index) => (
            <article key={index} className="col-md-6 col-lg-4">
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-3 text-danger">🩸 {camp.camp_name}</h5>
                  <ul className="list-unstyled">
                    <li><strong>Organizer:</strong> {camp.organizer}</li>
                    <li><strong>Location:</strong> {camp.location}</li>
                    <li><strong>Date:</strong> {camp.date}</li>
                    <li><strong>Time:</strong> {camp.time}</li>
                    <li><strong>Contact:</strong> {camp.contact}</li>
                    <li><strong>Email:</strong> {camp.email}</li>
                  </ul>
                  <div className="text-center mt-3">
                    <button className="btn btn-success" onClick={handleRegister}>Register</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Create New Camp Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          ➕ Create New Blood Camp
        </button>
      </div>

      {/* Blood Camp Creation Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Blood Camp</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleCreateCamp}>
                  {["camp_name", "organizer", "location", "date", "time", "contact", "email"].map((field, index) => (
                    <div className="mb-3" key={index}>
                      <label className="form-label text-capitalize">{field.replace("_", " ")}</label>
                      <input
                        type="text"
                        className="form-control"
                        name={field}
                        value={campDetails[field]}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  ))}
                  <div className="text-center">
                    <button type="submit" className="btn btn-success">Create Camp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blood Camps List */}
      <div className="container mt-5">
        {/* <h2 className="text-center text-primary">🏥 Available Blood Camps</h2> */}

        <div className="row">
          {currentCamps.map((camp, index) => (
            <article key={index} className="col-md-6 col-lg-4">
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-3 text-primary">🩸 {camp.camp_name}</h5>
                  <ul className="list-unstyled">
                    <li><strong>Organizer:</strong> {camp.organizer}</li>
                    <li><strong>Location:</strong> {camp.location}</li>
                    <li><strong>Date:</strong> {camp.date}</li>
                    <li><strong>Time:</strong> {camp.time}</li>
                    <li><strong>Contact:</strong> {camp.contact}</li>
                    <li><strong>Email:</strong> {camp.email}</li>
                  </ul>
                  <div className="text-center mt-3">
                    <button className="btn btn-danger" onClick={handleRegister}>Register</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDonor;
