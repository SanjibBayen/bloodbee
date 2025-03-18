import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const reportsData = [
  {
    title: "Monthly Donations",
    description: "View the number of blood donations received each month.",
    data: "120 donations in March 2025",
  },
  {
    title: "Inventory Levels",
    description: "Check the current levels of blood inventory.",
    data: "A+: 50 units, O-: 30 units, B+: 40 units",
  },
  {
    title: "Donor Demographics",
    description: "Analyze the demographics of donors.",
    data: "60% Male, 40% Female",
  },
  {
    title: "Donation Trends",
    description: "View trends in blood donations over time.",
    data: "Increasing trend in donations over the past 6 months",
  },
  {
    title: "Urgent Requests",
    description: "Track the number of urgent blood requests.",
    data: "5 urgent requests in the past month",
  },
];

const ReportsAndAnalytics = () => {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Reports and Analytics</h2>
      <Row className="d-flex justify-content-center">
        {reportsData.map((report, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title>{report.title}</Card.Title>
                <Card.Text>{report.description}</Card.Text>
                <Card.Text><strong>Data:</strong> {report.data}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReportsAndAnalytics;