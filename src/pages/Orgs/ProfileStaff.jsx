import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaIdBadge, FaUsers, FaCalendarAlt, FaKey, FaUserShield, FaClock, FaPencilAlt } from "react-icons/fa";
import { splash1 } from "../../assets/img";

const ProfileStaff = ({ staffData }) => {
  const [isActive, setIsActive] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState(staffData);

  // Toggle Active/Deactivate Status
  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  // Handle Input Change
  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  // Save Updated Details
  const handleSave = () => {
    console.log("Updated Profile:", editedData);
    setShowEditModal(false);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {/* Profile Sidebar */}
          <div className="col-md-4">
            <div className="card shadow-lg p-4 text-center">
            <img 
  src={splash1} 
  alt="Profile" 
  className="rounded-circle img-fluid mb-3 mx-auto d-block" 
  style={{ width: "120px" }} 
/>

              <h5 className="fw-bold">{staffData.full_name}</h5>
              <p className="text-muted">{staffData.job_title} at {staffData.organization}</p>
              <p className="text-muted"><FaMapMarkerAlt className="me-2" />{staffData.address}</p>
              <p><strong>Joined:</strong> {staffData.joining_date}</p>

              <span className={`badge ${isActive ? "bg-success" : "bg-danger"} p-2 w-auto`}>
  {isActive ? "Active" : "Deactivated"}
</span>


              <div className="d-flex justify-content-center mt-3">
                <Button variant={isActive ? "danger" : "success"} onClick={toggleStatus}>
                  {isActive ? "Deactivate" : "Activate"}
                </Button>
                <Button variant="primary" className="ms-2" onClick={() => setShowEditModal(true)}>
                  <FaPencilAlt className="me-1" /> Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Staff Details */}
          <div className="col-md-8">
            <div className="card shadow-lg p-4">
              <h4 className="mb-4">Profile Information</h4>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaUser className="me-2" /> Full Name</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.full_name}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaEnvelope className="me-2" /> Email</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.email}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaPhone className="me-2" /> Mobile</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.phone_number}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaIdBadge className="me-2" /> Employee ID</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.employee_id}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaBuilding className="me-2" /> Organization</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.organization}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaUsers className="me-2" /> Department</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.department}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaCalendarAlt className="me-2" /> Date of Birth</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.dob}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaKey className="me-2" /> Permissions</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.permissions}</p></div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-4"><p className="fw-bold"><FaUserShield className="me-2" /> Emergency Contact</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.emergency_contact}</p></div>
              </div>

              <div className="row">
                <div className="col-sm-4"><p className="fw-bold"><FaClock className="me-2" /> Last Login</p></div>
                <div className="col-sm-8"><p className="text-muted">{staffData.last_login}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
     {/* Edit Profile Modal */}
<Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
  <Modal.Header closeButton>
    <Modal.Title>Edit Profile</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="full_name"
          value={editedData.full_name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={editedData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="text"
          name="phone_number"
          value={editedData.phone_number}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control
          type="text"
          name="employee_id"
          value={editedData.employee_id}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Organization</Form.Label>
        <Form.Control
          type="text"
          name="organization"
          value={editedData.organization}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          name="department"
          value={editedData.department}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={editedData.dob}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Permissions</Form.Label>
        <Form.Control
          type="text"
          name="permissions"
          value={editedData.permissions}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Emergency Contact</Form.Label>
        <Form.Control
          type="text"
          name="emergency_contact"
          value={editedData.emergency_contact}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Login</Form.Label>
        <Form.Control
          type="text"
          name="last_login"
          value={editedData.last_login}
          disabled // Last login is usually not editable
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
    <Button variant="success" onClick={handleSave}>Save Changes</Button>
  </Modal.Footer>
</Modal>

    </div>
  );
};

export default ProfileStaff;
