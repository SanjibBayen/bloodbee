import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DonationHistory = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Donation History</h2>
      <p>View your past blood donation records.</p>
      <Link to="/">
        <Button variant="danger">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default DonationHistory;
