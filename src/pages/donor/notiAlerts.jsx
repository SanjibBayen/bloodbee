import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Notifications & Alerts</h2>
      <p>View notifications and alerts for upcoming appointments and urgent requests.</p>
      <Link to="/">
        <Button variant="danger">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default Notifications;
