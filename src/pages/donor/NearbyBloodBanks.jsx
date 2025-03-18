import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const bloodBanks = [
  {
    name: "City Blood Bank",
    address: "123 Main St, Cityville",
    phone: "(123) 456-7890",
    distance: "2 miles",
  },
  {
    name: "Town Blood Center",
    address: "456 Elm St, Townsville",
    phone: "(987) 654-3210",
    distance: "5 miles",
  },
  {
    name: "County Blood Donation Center",
    address: "789 Oak St, Countyland",
    phone: "(555) 123-4567",
    distance: "10 miles",
  },
];

const NearbyBloodBanks = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Nearby Blood Banks</h2>
      <p>Locate nearby blood banks and donation centers.</p>
      <Row className="d-flex justify-content-center">
        {bloodBanks.map((bank, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{bank.name}</Card.Title>
                <Card.Text>
                  <strong>Address:</strong> {bank.address}
                </Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> {bank.phone}
                </Card.Text>
                <Card.Text>
                  <strong>Distance:</strong> {bank.distance}
                </Card.Text>
                <Button variant="primary" href={`tel:${bank.phone}`}>
                  Call Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NearbyBloodBanks;