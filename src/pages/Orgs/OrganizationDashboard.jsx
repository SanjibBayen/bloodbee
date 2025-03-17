import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers, // Icon for Manage Donors
  faClipboardList, // Icon for Manage Blood Requests
  faCalendarAlt, // Icon for Appointment Scheduling
  faWarehouse, // Icon for Inventory Management
  faBell, // Icon for Notifications and Alerts
  faChartBar, // Icon for Reports and Analytics
  faUserShield, // Icon for User Management
} from "@fortawesome/free-solid-svg-icons";

// Reusable Card Component
const InfoCard = ({ icon, title, text, buttonText, onClick }) => (
  <Card className="text-center p-3 shadow-sm">
    <Card.Body>
      <FontAwesomeIcon icon={icon} size="3x" className="mb-3" style={{ color: "#ff4757" }} />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="primary" style={{ backgroundColor: "#ff4757", borderColor: "#ff4757" }} onClick={onClick}>
        <FontAwesomeIcon icon={icon} className="me-2" />
        {buttonText}
      </Button>
    </Card.Body>
  </Card>
);

const OrganizationDashboard = () => {
  const handleManageDonors = () => {
    // Navigate to Manage Donors page
  };

  const handleManageRequests = () => {
    // Navigate to Manage Blood Requests page
  };

  const handleScheduleAppointments = () => {
    // Navigate to Appointment Scheduling page
  };

  const handleInventoryManagement = () => {
    // Navigate to Inventory Management page
  };

  const handleNotifications = () => {
    // Navigate to Notifications and Alerts page
  };

  const handleReports = () => {
    // Navigate to Reports and Analytics page
  };

  const handleUserManagement = () => {
    // Navigate to User Management page
  };

  return (
    <Container className="d-flex flex-column align-items-center vh-100 justify-content-center">
      <Row className="mt-4 w-100">
        <Col md={4}>
          <InfoCard
            icon={faUsers}
            title="Manage Donors"
            text="View and manage donor information."
            buttonText="Manage Donors"
            onClick={handleManageDonors}
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faClipboardList}
            title="Manage Blood Requests"
            text="View and manage blood requests."
            buttonText="Manage Requests"
            onClick={handleManageRequests}
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faCalendarAlt}
            title="Appointment Scheduling"
            text="Schedule and manage donation appointments."
            buttonText="Schedule Appointments"
            onClick={handleScheduleAppointments}
          />
        </Col>
      </Row>

      <Row className="mt-4 w-100">
        <Col md={4}>
          <InfoCard
            icon={faWarehouse}
            title="Inventory Management"
            text="Track and manage blood inventory."
            buttonText="Manage Inventory"
            onClick={handleInventoryManagement}
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faBell}
            title="Notifications and Alerts"
            text="Send notifications and alerts."
            buttonText="View Notifications"
            onClick={handleNotifications}
          />
        </Col>
        <Col md={4}>
          <InfoCard
            icon={faChartBar}
            title="Reports and Analytics"
            text="Generate reports and view analytics."
            buttonText="View Reports"
            onClick={handleReports}
          />
        </Col>
      </Row>

      <Row className="mt-4 w-100">
        <Col md={4}>
          <InfoCard
            icon={faUserShield}
            title="User Management"
            text="Manage user accounts and permissions."
            buttonText="Manage Users"
            onClick={handleUserManagement}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OrganizationDashboard;