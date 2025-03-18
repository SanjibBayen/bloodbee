import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCalendarAlt,
  faWarehouse,
  faBell,
  faChartBar,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const InfoCard = ({ icon, title, text, buttonText, onClick }) => (
  <Card className="text-center p-3 shadow-sm h-100">
    <Card.Body>
      <FontAwesomeIcon icon={icon} size="3x" className="mb-3 text-danger" />
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="danger" className="d-flex align-items-center justify-content-center mx-auto" onClick={onClick}>
        <FontAwesomeIcon icon={icon} className="me-2" />
        {buttonText}
      </Button>
    </Card.Body>
  </Card>
);

const OrganizationDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="vh-100 py-4">
      <div className="text-center text-white bg-danger py-3 rounded">
        {/* <h4 className="mb-0">Save Life • Give Blood</h4> */}
      </div>

      {/* Cards Grid */}
      <Row className="mt-4 g-4 d-flex justify-content-center">
        <Col md={4}>
          <InfoCard 
            icon={faUsers} 
            title="Donors Information" 
            text="View and manage donor information." 
            buttonText="Manage Donors" 
            onClick={() => navigate('/request-donor')} 
          />
        </Col>
        <Col md={4}>
          <InfoCard 
            icon={faCalendarAlt} 
            title="Donor Appointment" 
            text="Schedule donation appointments." 
            buttonText="Schedule Appointments" 
            onClick={() => navigate('/donor-appointment')} 
          />
        </Col>
        <Col md={4}>
          <InfoCard 
            icon={faWarehouse} 
            title="Inventory Management" 
            text="Track and manage blood inventory." 
            buttonText="Manage Inventory" 
            onClick={() => navigate('/orgs/InventoryManagement')} 
          />
        </Col>
        <Col md={4}>
          <InfoCard 
            icon={faChartBar} 
            title="Reports and Analytics" 
            text="Generate reports and view analytics." 
            buttonText="View Reports" 
            onClick={() => navigate('/ReportsAndAnalytics')} 
          />
        </Col>
        <Col md={4}>
          <InfoCard 
            icon={faUserShield} 
            title="User Management" 
            text="Manage user accounts and permissions." 
            buttonText="Manage Users" 
            onClick={() => navigate('/profile-staff')} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OrganizationDashboard;