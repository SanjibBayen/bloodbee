import React, { useState } from "react";
import { NavbarHome } from "../../components/Elements";
import { splash1 } from "../../assets/img";
import { Modal, Button, Form } from "react-bootstrap";

const ProfileDonor = ({ donor }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedData, setEditedData] = useState(donor);
    const [isHealthy, setIsHealthy] = useState(donor.isHealthy ?? true); // Defaults to Healthy

    // Handle Input Change
    const handleChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    // Toggle Health Status
    const toggleHealthStatus = () => {
        setIsHealthy(!isHealthy);
    };

    // Save Updated Details
    const handleSave = () => {
        console.log("Updated Donor Profile:", editedData);
        setShowEditModal(false);
    };

    return (
        <div>
            {/* Profile Section */}
            <section style={{ backgroundColor: "#eee" }} className="container mb-4">
                <div className="container py-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle border border-primary overflow-hidden d-flex justify-content-center align-items-center"
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            backgroundColor: "#fff",
                                        }}>
                                        <img
                                            src={splash1}
                                            alt="avatar"
                                            className="img-fluid"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: "50%"
                                            }}
                                        />
                                    </div>
                                    <h5 className="my-3">{donor.full_name}</h5>
                                </div>
                                <p className="text-muted mb-1">{donor.birthdate}</p>
                                <p className="text-muted mb-4">{donor.address}</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <Button variant={isHealthy ? "success" : "danger"} onClick={toggleHealthStatus}>
                                        {isHealthy ? "Healthy" : "Unhealthy"}
                                    </Button>
                                    <Button variant="warning ms-2" onClick={() => setShowEditModal(true)}>
                                        Edit Profile
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Donor Details */}
                        <div className="card mb-4">
                            <div className="card-body">
                                {[
                                    { label: "Full Name", value: donor.full_name, name: "full_name" },
                                    { label: "Blood Type", value: donor.blood_type, name: "blood_type" },
                                    { label: "Address", value: donor.address, name: "address" },
                                    { label: "Date of Birth", value: donor.birthdate, name: "birthdate" },
                                ].map((field, index) => (
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">{field.label}</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{field.value}</p>
                                            </div>
                                        </div>
                                        {index < 3 && <hr />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Donor Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {[
                            { label: "Full Name", name: "full_name" },
                            { label: "Blood Type", name: "blood_type" },
                            { label: "Address", name: "address" },
                            { label: "Date of Birth", name: "birthdate" },
                        ].map((field, index) => (
                            <Form.Group key={index} className="mb-3">
                                <Form.Label>{field.label}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={field.name}
                                    value={editedData[field.name]}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProfileDonor;
