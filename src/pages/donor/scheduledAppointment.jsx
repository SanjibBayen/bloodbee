import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const ScheduledAppointments = () => {
  // Sample appointment data with organization names and locations
  const [appointments, setAppointments] = useState([
    { id: 1, organization: "Red Cross Society", location: "Kolkata", date: "2025-03-20", status: "Scheduled" },
    { id: 2, organization: "Lifeline Blood Bank", location: "Mumbai", date: "2025-03-22", status: "Completed" },
    { id: 3, organization: "Hope Foundation", location: "Delhi", date: "2025-03-25", status: "Scheduled" },
    { id: 4, organization: "Helping Hands NGO", location: "Chennai", date: "2025-03-18", status: "Completed" },
    { id: 5, organization: "Health First Foundation", location: "Bangalore", date: "2025-03-15", status: "Cancelled" },
  ]);

  // Function to cancel an appointment
  const cancelAppointment = (id) => {
    const updatedAppointments = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: "Cancelled" } : appt
    );
    setAppointments(updatedAppointments);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Scheduled Appointments</h2>

      {appointments.length > 0 ? (
        <>
          {/* Scheduled Appointments Table */}
          <h4 className="text-danger">Scheduled Appointments</h4>
          <Table striped bordered hover className="shadow-sm text-center">
            <thead className="bg-danger text-white">
              <tr>
                <th>#</th>
                <th>Organization Name</th>
                <th>Location</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments
                .filter((appt) => appt.status === "Scheduled")
                .map((appointment, index) => (
                  <tr key={appointment.id}>
                    <td>{index + 1}</td>
                    <td>{appointment.organization}</td>
                    <td>{appointment.location}</td>
                    <td>{appointment.date}</td>
                    <td className="text-success fw-bold">{appointment.status}</td>
                    <td>
                      <Button variant="danger" size="sm" onClick={() => cancelAppointment(appointment.id)}>
                        Cancel
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          {/* Completed Appointments Table */}
          <h4 className="text-success mt-4">Completed Appointments</h4>
          <Table striped bordered hover className="shadow-sm text-center">
            <thead className="bg-success text-white">
              <tr>
                <th>#</th>
                <th>Organization Name</th>
                <th>Location</th>
                <th>Appointment Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments
                .filter((appt) => appt.status === "Completed")
                .map((appointment, index) => (
                  <tr key={appointment.id}>
                    <td>{index + 1}</td>
                    <td>{appointment.organization}</td>
                    <td>{appointment.location}</td>
                    <td>{appointment.date}</td>
                    <td className="text-primary fw-bold">{appointment.status}</td>
                  </tr>
                ))}
            </tbody>
          </Table>

          {/* Cancelled Appointments Table */}
          <h4 className="text-muted mt-4">Cancelled Appointments</h4>
          <Table striped bordered hover className="shadow-sm text-center">
            <thead className="bg-secondary text-white">
              <tr>
                <th>#</th>
                <th>Organization Name</th>
                <th>Location</th>
                <th>Appointment Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments
                .filter((appt) => appt.status === "Cancelled")
                .map((appointment, index) => (
                  <tr key={appointment.id}>
                    <td>{index + 1}</td>
                    <td>{appointment.organization}</td>
                    <td>{appointment.location}</td>
                    <td>{appointment.date}</td>
                    <td className="text-danger fw-bold">{appointment.status}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      ) : (
        <p className="text-center text-muted">No scheduled appointments.</p>
      )}
    </Container>
  );
};

export default ScheduledAppointments;
