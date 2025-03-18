import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { acceptData } from '../../constraints/Data'; // Import acceptData

const ManageBloodRequests = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleShowModal = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRequest(null);
  };

  const handleApprove = () => {
    // Logic to approve the request
    handleCloseModal();
  };

  const handleReject = () => {
    // Logic to reject the request
    handleCloseModal();
  };

  return (
    <Container className="py-4">
      <Row className="d-flex justify-content-center">
        {acceptData.map(request => (
          <Col md={4} key={request.request_id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Blood Request</Card.Title>
                <Card.Text>
                  <strong>Requester:</strong> {request.full_name}
                </Card.Text>
                <Card.Text>
                  <strong>Blood Type:</strong> {request.blood_type}
                </Card.Text>
                <Card.Text>
                  <strong>Urgency:</strong> {request.request_date}
                </Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(request)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedRequest && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Request Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Requester Name</Form.Label>
                <Form.Control type="text" value={selectedRequest.full_name} readOnly />
              </Form.Group>
              <Form.Group>
                <Form.Label>Blood Type</Form.Label>
                <Form.Control type="text" value={selectedRequest.blood_type} readOnly />
              </Form.Group>
              <Form.Group>
                <Form.Label>Urgency</Form.Label>
                <Form.Control type="text" value={selectedRequest.request_date} readOnly />
              </Form.Group>
              <Form.Group>
                <Form.Label>Details</Form.Label>
                <Form.Control as="textarea" rows={3} value={selectedRequest.address} readOnly />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            <Button variant="danger" onClick={handleReject}>Reject</Button>
            <Button variant="success" onClick={handleApprove}>Accept</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ManageBloodRequests;