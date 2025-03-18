import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaIdBadge, FaBuilding, FaUsers, FaBirthdayCake, FaClock } from 'react-icons/fa';

const RegisterHospitalStaff = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    employeeId: '',
    organization: '',
    department: '',
    birthdate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg p-4" style={{ borderRadius: "20px" }}>
            <div className="row">

              {/* Left Section - Form */}
              <div className="col-md-6">
                <h2 className="text-center fw-bold mb-4">
                  <span className="text-danger">Hospital</span> Staff Register
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Input Fields with Icons */}
                  {[
                    { name: 'fullName', placeholder: 'Full Name', icon: <FaUser /> },
                    { name: 'email', placeholder: 'Email', icon: <FaEnvelope />, type: 'email' },
                    { name: 'mobile', placeholder: 'Mobile', icon: <FaPhone /> },
                    { name: 'employeeId', placeholder: 'Employee ID', icon: <FaIdBadge /> },
                    { name: 'organization', placeholder: 'Organization', icon: <FaBuilding /> },
                    { name: 'department', placeholder: 'Department', icon: <FaUsers /> },
                    { name: 'birthdate', placeholder: 'Date of Birth', icon: <FaBirthdayCake />, type: 'date' }
                  ].map(({ name, placeholder, icon, type = 'text' }) => (
                    <div className="input-group mb-3" key={name}>
                      <span className="input-group-text bg-danger text-white">{icon}</span>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className="form-control"
                        placeholder={placeholder}
                        required
                      />
                    </div>
                  ))}

                  {/* Submit Button */}
                  <div className="text-center">
                    <button type="submit" className="btn btn-danger btn-lg w-100">
                      Register
                    </button>
                  </div>

                  {/* Login Redirect */}
                  <div className="text-center mt-3">
                    <p>Already have an account? <Link to="/login-staff" className="text-danger">Login here</Link></p>
                  </div>

                </form>
              </div> {/* End Left Section */}

              {/* Right Section - Image */}
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img
                  src="https://sbtcup.org/ImageNew/component.jpg"
                  className="img-fluid rounded-4"
                  alt="Hospital Staff"
                  style={{ maxHeight: "450px" }}
                />
              </div>

            </div> {/* End Row */}
          </div> {/* End Card */}
        </div>
      </div>
    </div>
  );
};

export default RegisterHospitalStaff;
