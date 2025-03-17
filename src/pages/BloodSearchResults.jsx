import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { bloodData, states, districts, bloodGroups, bloodTypes } from "../constraints/Blooddata"; // Ensure correct import
import "../BloodSearchResults.css"; // Ensure this file exists

const BloodSearchResults = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [filteredData, setFilteredData] = useState(bloodData);

  // Reset district selection when state changes
  useEffect(() => {
    setSelectedDistrict("");
  }, [selectedState]);

  const handleSearch = () => {
    let filtered = [...bloodData];

    if (selectedState) {
      filtered = filtered.filter(data => data.state === selectedState);
    }

    if (selectedDistrict) {
      filtered = filtered.filter(data => data.district === selectedDistrict);
    }

    if (selectedBloodGroup) {
      filtered = filtered.filter(data => data.availability.includes(selectedBloodGroup));
    }

    if (selectedBloodType) {
      filtered = filtered.filter(data => data.type === selectedBloodType);
    }

    setFilteredData(filtered);
  };

  return (
    <Container className="blood-search-results-container py-4">
      <h1 className="text-center mb-4">Blood Stock Availability</h1>
      <Form className="mb-4">
        <Row className="align-items-center">
          <Col xs={12} md={3} className="mb-2 mb-md-0">
            <Form.Control as="select" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </Form.Control>
          </Col>
          <Col xs={12} md={3} className="mb-2 mb-md-0">
            <Form.Control as="select" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedState}>
              <option value="">All Districts</option>
              {selectedState && districts[selectedState] ? (
                districts[selectedState].map((district, index) => (
                  <option key={index} value={district}>{district}</option>
                ))
              ) : (
                <option disabled>No districts available</option>
              )}
            </Form.Control>
          </Col>
          <Col xs={12} md={3} className="mb-2 mb-md-0">
            <Form.Control as="select" value={selectedBloodGroup} onChange={(e) => setSelectedBloodGroup(e.target.value)}>
              <option value="">All Blood Groups</option>
              {bloodGroups.map((group, index) => (
                <option key={index} value={group}>{group}</option>
              ))}
            </Form.Control>
          </Col>
          <Col xs={12} md={3} className="mb-2 mb-md-0">
            <Form.Control as="select" value={selectedBloodType} onChange={(e) => setSelectedBloodType(e.target.value)}>
              <option value="">Select Blood Component</option>
              {bloodTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Button variant="danger" className="mt-3" onClick={handleSearch}>Search</Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Blood Bank</th>
            <th>State</th>
            <th>District</th>
            <th>Category</th>
            <th>Availability</th>
            <th>Last Updated</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.blood_bank}</td>
                <td>{data.state}</td>
                <td>{data.district}</td>
                <td>{data.category}</td>
                <td>{data.availability}</td>
                <td>{data.last_updated}</td>
                <td>{data.type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No matching records found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default BloodSearchResults;
