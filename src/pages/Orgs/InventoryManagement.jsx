import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const InventoryManagement = ({ inventoryData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4 text-danger fw-bold">🩸 Inventory Management</h2>
      <p className="text-center text-muted">Manage and track blood units efficiently.</p>
      
      <Row>
        {inventoryData.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body className="text-center">
                <Card.Title className="fw-bold fs-4 text-danger">
                  🩸 {item.bloodType}
                </Card.Title>
                <Card.Text className="fs-5">
                  <strong>Quantity:</strong> {item.quantity} units
                </Card.Text>
                <Button variant="outline-danger" onClick={() => handleViewItem(item)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Inventory Item Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>🩸 {selectedItem?.bloodType} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h4 className="fw-bold text-danger">{selectedItem?.bloodType} Blood</h4>
          <p><strong>Quantity:</strong> {selectedItem?.quantity} units</p>
          <p><strong>Storage Location:</strong> {selectedItem?.storage || 'Not specified'}</p>
          <p><strong>Last Updated:</strong> {selectedItem?.lastUpdated || 'N/A'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default InventoryManagement;
