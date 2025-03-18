import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ScheduledAppointments = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Scheduled Appointments</h2>
      <p>Check your upcoming blood donation appointments.</p>
      <Link to="/">
        <Button variant="danger">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default ScheduledAppointments;
