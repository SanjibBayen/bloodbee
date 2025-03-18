import React, { useState } from 'react';
import { Container, Row, Card, Button, Modal } from 'react-bootstrap';

const DonorAppointment = ({ acceptedDonors }) => {
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewProfile = (donor) => {
    setSelectedDonor(donor);
    setShowModal(true);
  };

  const handleNotify = (donor) => {
    alert(`Notification sent to ${donor.full_name} (${donor.email})`);
  };

  const handleReminder = (donor) => {
    alert(`Reminder sent to ${donor.full_name} for their scheduled donation on ${donor.scheduled_date}`);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Accepted Donors</h2>
      <Row className="d-flex flex-wrap justify-content-center gap-3">
        {acceptedDonors.map((donor) => (
          <Card key={donor.email} className="shadow-lg p-3 text-center" style={{ width: "18rem" }}>
            <div className="fs-1 text-danger">❤</div> {/* First font in red */}
            <Card.Body>
              <Card.Title className="fw-bold">Donor Information</Card.Title>
              <Card.Text><strong>Name:</strong> {donor.full_name}</Card.Text>
              <Card.Text><strong>Gender:</strong> {donor.gender}</Card.Text>
              <Card.Text><strong>Location:</strong> {donor.address}</Card.Text>
              <Card.Text><strong>Blood Group:</strong> {donor.blood_type}</Card.Text>
              <Card.Text><strong>Health:</strong> {donor.status}</Card.Text>
              <Card.Text><strong>Scheduled Date:</strong> {donor.scheduled_date}</Card.Text>
              <Button variant="primary" onClick={() => handleViewProfile(donor)}>View Profile</Button>
              <Button variant="success" className="ms-2" onClick={() => handleNotify(donor)}>Notify</Button>
              {/* <Button variant="warning" className="ms-2" onClick={() => handleReminder(donor)}>Reminder</Button> */}
            </Card.Body>
          </Card>
        ))}
      </Row>

      {/* Donor Profile Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Donor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="fs-1 text-danger">❤</div> {/* First font in red */}
          <h4 className="fw-bold">Donor Information</h4>
          <p><strong>Name:</strong> {selectedDonor?.full_name}</p>
          <p><strong>Gender:</strong> {selectedDonor?.gender}</p>
          <p><strong>Location:</strong> {selectedDonor?.address}</p>
          <p><strong>Blood Group:</strong> {selectedDonor?.blood_type}</p>
          <p><strong>Health:</strong> {selectedDonor?.status}</p>
          <p><strong>Email:</strong> {selectedDonor?.email}</p>
          <p><strong>Scheduled Date:</strong> {selectedDonor?.scheduled_date}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleNotify(selectedDonor)}>Notify</Button>
          {/* <Button variant="warning" onClick={() => handleReminder(selectedDonor)}>Reminder</Button> */}
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DonorAppointment;
