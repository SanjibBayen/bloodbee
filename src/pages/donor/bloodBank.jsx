import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const bloodBanks = [
  {
    name: "City Blood Bank",
    address: "123 Main St, Cityville",
    phone: "+11234567890",
    distance: "2 miles",
    latitude: 40.712776,
    longitude: -74.005974,
  },
  {
    name: "Metro Blood Bank",
    address: "101 Pine St, Metropolis",
    phone: "+11112223333",
    distance: "3 miles",
    latitude: 38.89511,
    longitude: -77.03637,
  },
  {
    name: "Town Blood Center",
    address: "456 Elm St, Townsville",
    phone: "+19876543210",
    distance: "5 miles",
    latitude: 34.052235,
    longitude: -118.243683,
  },
  {
    name: "Suburban Blood Center",
    address: "202 Maple St, Suburbia",
    phone: "+14445556666",
    distance: "7 miles",
    latitude: 40.73061,
    longitude: -73.935242,
  },
  {
    name: "County Blood Donation Center",
    address: "789 Oak St, Countyland",
    phone: "+15551234567",
    distance: "10 miles",
    latitude: 37.774929,
    longitude: -122.419418,
  },
  {
    name: "Regional Blood Donation Center",
    address: "303 Birch St, Regionville",
    phone: "+17778889999",
    distance: "12 miles",
    latitude: 35.689487,
    longitude: 139.691711,
  },
];

const NearbyBloodBanks = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Nearby Blood Banks</h2>
      <p>Locate nearby blood banks and donation centers.</p>
      <Row className="justify-content-center">
        {bloodBanks.map((bank, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title>{bank.name}</Card.Title>
                <Card.Text><strong>Address:</strong> {bank.address}</Card.Text>
                <Card.Text><strong>Phone:</strong> {bank.phone}</Card.Text>
                <Card.Text><strong>Distance:</strong> {bank.distance}</Card.Text>
                <Button 
                  variant="primary" 
                  href={`tel:${bank.phone}`} 
                  className="me-2"
                  rel="noopener noreferrer"
                >
                  Call Now
                </Button>
                <Button
                  variant="secondary"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${bank.latitude},${bank.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Map
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
