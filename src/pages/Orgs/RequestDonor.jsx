import React, { useState } from 'react';
import { Container, Row, Card, Button, Form, Modal } from 'react-bootstrap';

const RequestDonor = ({ allDonors }) => {
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [requestedDonors, setRequestedDonors] = useState([]);
  const [showRequestedDonors, setShowRequestedDonors] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const donorsPerPage = 8;

  // Filter donors based on blood type and location
  const filteredDonors = allDonors.filter(donor => 
    (selectedBloodType === '' || donor.blood_type === selectedBloodType) &&
    (selectedLocation === '' || donor.address.toLowerCase().includes(selectedLocation.toLowerCase()))
  );

  // Pagination
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = filteredDonors.slice(indexOfFirstDonor, indexOfLastDonor);
  const totalPages = Math.ceil(filteredDonors.length / donorsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle donor request
  const handleRequest = (donor) => {
    if (!requestedDonors.some(d => d.email === donor.email)) {
      setRequestedDonors([...requestedDonors, donor]);
      alert(`Notification sent to ${donor.full_name}`);
    }
  };

  return (
    <Container className="py-4">
      {/* Selection Filters */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <Form.Group controlId="bloodTypeSelect">
          <Form.Label>Select Blood Type</Form.Label>
          <Form.Select value={selectedBloodType} onChange={(e) => setSelectedBloodType(e.target.value)}>
            <option value="">All Blood Types</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="locationSelect">
          <Form.Label>Enter Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
        </Form.Group>

        {/* Button to open Requested Donors modal */}
        <Button variant="success" className="mt-4" onClick={() => setShowRequestedDonors(true)}>
          View Requested Donors ({requestedDonors.length})
        </Button>
      </div>

      {/* Donors List */}
      <Row className="d-flex flex-wrap justify-content-center gap-3">
        {currentDonors.map(donor => (
          <Card key={donor.email} className="shadow-lg p-3 text-center" style={{ width: "18rem" }}>
            <div className="fs-1 text-danger">❤</div>
            <Card.Body>
              <Card.Title className="fw-bold">Donor Information</Card.Title>
              <Card.Text><strong>Name:</strong> {donor.full_name}</Card.Text>
              <Card.Text><strong>Gender:</strong> {donor.gender}</Card.Text>
              <Card.Text><strong>Location:</strong> {donor.address}</Card.Text>
              <Card.Text><strong>Blood Group:</strong> {donor.blood_type}</Card.Text>
              <Card.Text><strong>Health:</strong> {donor.status}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleRequest(donor)}
                disabled={requestedDonors.some(d => d.email === donor.email)}
              >
                {requestedDonors.some(d => d.email === donor.email) ? "Requested" : "Request"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <Button variant="light" onClick={() => paginate(currentPage - 1)}>Previous</Button>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <Button variant="light" onClick={() => paginate(index + 1)}>{index + 1}</Button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <Button variant="light" onClick={() => paginate(currentPage + 1)}>Next</Button>
          </li>
        </ul>
      </div>

      {/* Requested Donors Modal */}
      <Modal show={showRequestedDonors} onHide={() => setShowRequestedDonors(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Requested Donors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {requestedDonors.length > 0 ? (
            <Row className="d-flex flex-wrap justify-content-center gap-3">
              {requestedDonors.map(donor => (
                <Card key={donor.email} className="shadow-lg p-3 text-center" style={{ width: "18rem" }}>
                  <div className="fs-1 text-danger">❤</div>
                  <Card.Body>
                    <Card.Title className="fw-bold">Donor Information</Card.Title>
                    <Card.Text><strong>Name:</strong> {donor.full_name}</Card.Text>
                    <Card.Text><strong>Gender:</strong> {donor.gender}</Card.Text>
                    <Card.Text><strong>Location:</strong> {donor.address}</Card.Text>
                    <Card.Text><strong>Blood Group:</strong> {donor.blood_type}</Card.Text>
                    <Card.Text><strong>Health:</strong> {donor.status}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          ) : (
            <p className="text-center">No donors have been requested yet.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRequestedDonors(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RequestDonor;
