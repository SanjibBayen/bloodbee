import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ManageBloodRequests from './ManageBloodRequests';
// import { FaTint, FaMapMarkerAlt, FaVenusMars, FaHeartbeat } from 'react-icons/fa';

const RequestDonor = ({ allDonors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const donorsPerPage = 8;

  // Calculate the index of the last donor on the current page
  const indexOfLastDonor = currentPage * donorsPerPage;
  // Calculate the index of the first donor on the current page
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  // Get the donors for the current page
  const currentDonors = allDonors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Optionally, you can add any other logic here, such as showing a message to the user
  };

  return (
    <div>
      {/* <NavbarHome /> */}
     
      <Container className="d-flex flex-wrap justify-content-center gap-3 py-4">
        {currentDonors.map(donor => (
          <Card key={donor.email} className="shadow-lg p-3 text-center" style={{ width: "18rem" }}>
            <div className="fs-1 text-danger">❤</div>
            <Card.Body>
              <Card.Title className="fw-bold">Donor Information</Card.Title>
              <Card.Text>
                 <strong>Name:</strong> {donor.full_name}
              </Card.Text>
              <Card.Text>
                 <strong>Gender:</strong> {donor.gender}
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> {donor.address}
              </Card.Text>
              <Card.Text>
                 <strong>Blood Group:</strong> {donor.blood_type}
              </Card.Text>
              <Card.Text>
                 <strong>Health:</strong> {donor.status}
              </Card.Text>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="donor_email" value={donor.email} />
                <Button variant="secondary" className="mb-2">More...</Button>
              </form>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="donor_email" value={donor.email} />
                <Button variant="primary">Request</Button>
              </form>
            </Card.Body>
          </Card>
        ))}
      </Container>

      {/* Pagination links */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>
                    Previous
                  </a>
                </li>
                {Array.from({ length: Math.ceil(allDonors.length / donorsPerPage) }).map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 && 'active'}`}>
                    <a className="page-link" href="#" onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(allDonors.length / donorsPerPage) ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default RequestDonor;
