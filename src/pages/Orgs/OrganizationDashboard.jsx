import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint, // Blood drop icon for Blood Requests
  faFileMedical, // Medical file icon for Donation History
  faClock, // Clock icon for Scheduled Appointments
  faBell, // Notification bell icon
  faHospital, // Hospital icon for Nearby Blood Banks
  faUserCog, // User settings icon for Account Management
} from "@fortawesome/free-solid-svg-icons";

// Reusable Card Component
const InfoCard = ({ icon, title, text, buttonText, link }) => (
  <Card className="text-center p-3 shadow-sm">
    <Card.Body>
      <FontAwesomeIcon icon={icon} size="3x" className="mb-3" style={{ color: "#ff4757" }} />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Link to={link}>
        <Button variant="primary" style={{ backgroundColor: "#ff4757", borderColor: "#ff4757" }}>
          <FontAwesomeIcon icon={icon} className="me-2" />
          {buttonText}
        </Button>
      </Link>
    </Card.Body>
  </Card>
);

const OrganizationDashboard= () => {
  return (
    <Container className="d-flex flex-column align-items-center vh-100 justify-content-center">
      {/* Header Section */}
      <div className="bg-danger text-white p-3 rounded d-flex align-items-center justify-content-center w-100">
        <div className="heart-container me-3">
          <div className="heart"></div>
          <div className="heart half"></div>
        </div>
        <h4 className="mb-0 text-center">
          Save Life
          <br />
          Give Blood
        </h4>
      </div>

      {/* Options Section */}
      <Row className="mt-4 w-100">
        <Col md={4}>
          <InfoCard
            icon={faTint}
            title="Blood Requests"
            text="Emergency blood request."
            buttonText="Request Blood"
            link="/manage-blood-requests" // Link to ManageBloodRequests
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faFileMedical}
            title="Donation History"
            text="View your past donation records."
            buttonText="View History"
            link="/donation-history" // Example link, update as needed
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faClock}
            title="Scheduled Appointments"
            text="Check your upcoming donation appointments."
            buttonText="View Schedule"
            link="/scheduled-appointments" // Example link, update as needed
          />
        </Col>
      </Row>

      <Row className="mt-4 w-100">
        <Col md={4}>
          <InfoCard
            icon={faBell}
            title="Notifications and Alerts"
            text="View notifications and alerts for upcoming appointments and urgent requests."
            buttonText="View Notifications"
            link="/notifications" // Example link, update as needed
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faHospital}
            title="Nearby Blood Banks"
            text="Locate nearby blood banks and donation centers."
            buttonText="Find Blood Banks"
            link="/nearby-blood-banks" // Example link, update as needed
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faUserCog}
            title="Account Management"
            text="Edit and view profile settings."
            buttonText="Manage Account"
            link="/account-management" // Example link, update as needed
          />
        </Col>
      </Row>

      {/* Inline CSS for heart shapes */}
      <style jsx>{`
        .heart-container {
          display: flex;
          align-items: center;
        }

        .heart {
          width: 40px;
          height: 40px;
          background-color: red;
          clip-path: polygon(50% 0%, 100% 35%, 85% 100%, 50% 75%, 15% 100%, 0% 35%);
          margin-right: 5px;
        }

        .half {
          background: linear-gradient(to top, red 50%, white 50%);
        }
      `}</style>
    </Container>
  );
};

export default OrganizationDashboard;
