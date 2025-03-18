import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AccountManagement = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Account Management</h2>
      <p>Edit and view your profile settings.</p>
      <Link to="/">
        <Button variant="danger">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default AccountManagement;
