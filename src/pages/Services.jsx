import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { blooddirectory, donorlogin, bloodsearch } from '../assets/img';
import "./Services.css"; // Import custom CSS
import { Link } from 'react-router-dom';

const services = [
  { name: "Blood Availability", image: bloodsearch ,link: "/home-donor" },
  { name: "Organization Login", image: blooddirectory, link: "/login-staff" },
  { name: "Donor Login", image: donorlogin, link: "/login-donor" }
];

const Services = () => {
  return (
    <section className="services-section">
      {/* <h2 className="text-center">Our Services</h2> */}
      <Container>
        <Row className="justify-content-center gap-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="service-card font-weight-bold">
                <Card.Img variant="top" src={service.image} alt={service.name} />
                <Card.Body>
                  {/* <Card.Text>{service.name}</Card.Text> */}
                  {service.link && (
                    <Link to={service.link} className="btn btn-outline-dark btn-lg m-1" role="button">
                      {service.name}
                    </Link>
                  )}
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