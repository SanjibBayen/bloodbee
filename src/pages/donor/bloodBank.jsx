import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NearbyBloodBanks = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Nearby Blood Banks</h2>
      <p>Locate nearby blood banks and donation centers.</p>
      <Link to="/">
        <Button variant="danger">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default NearbyBloodBanks;
