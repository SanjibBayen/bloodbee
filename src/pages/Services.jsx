import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { blooddirectory, donorlogin, bloodsearch } from "../assets/img";
import { Link } from "react-router-dom";
import "./Services.css"; // Import custom styles

const services = [
  { name: "Blood Availability", image: bloodsearch, link: "/home-donor" },
  { name: "Organization Login", image: blooddirectory, link: "/login-staff" },
  { name: "Donor Login", image: donorlogin, link: "/login-donor" }
];

const Services = () => {
  return (
    <section className="services-container">
      <Container>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
              <Card className="service-card">
                <Card.Img variant="top" src={service.image} alt={service.name} />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Link to={service.link} className="btn service-btn">
                    {service.name}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
