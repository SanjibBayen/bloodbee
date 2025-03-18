import React, { useState } from 'react';
import { lable } from '../../assets/img'; 
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaTint, FaBirthdayCake, FaMapMarkerAlt, FaVenusMars } from 'react-icons/fa';

const RegisterDonor = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    address: '',
    phone: '',
    blood_type: '',
    birthdate: '',
    gender: '',
    email: '',
    password: '',
    password_confirmation: '',
    agreeTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
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
  <span className="text-danger">Blood</span> Donor Register
</h2>

                <form onSubmit={handleSubmit}>

                  {/* Input Fields with Icons */}
                  {[
                    { name: 'name', placeholder: 'Full Name', icon: <FaUser /> },
                    { name: 'username', placeholder: 'Username', icon: <FaUser /> },
                    { name: 'email', placeholder: 'Email', icon: <FaEnvelope /> },
                    { name: 'phone', placeholder: 'Phone Number', icon: <FaPhone /> },
                    { name: 'address', placeholder: 'Address', icon: <FaMapMarkerAlt /> },
                    { name: 'blood_type', placeholder: 'Blood Type', icon: <FaTint /> },
                    { name: 'birthdate', placeholder: 'Date of Birth', icon: <FaBirthdayCake />, type: 'date' },
                    { name: 'gender', placeholder: 'Gender (M/F)', icon: <FaVenusMars /> },
                    { name: 'password', placeholder: 'Password', icon: <FaLock />, type: 'password' },
                    { name: 'password_confirmation', placeholder: 'Confirm Password', icon: <FaLock />, type: 'password' }
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

                  {/* Agree to Terms */}
                  <div className="form-check d-flex justify-content-center mb-3">
                    <input 
                      className="form-check-input me-2"
                      type="checkbox" 
                      name="agreeTerms" 
                      checked={formData.agreeTerms} 
                      onChange={handleChange} 
                      required
                    />
                    <label className="form-check-label">
  I agree to all statements in <Link to="#" className="text-danger">Terms of Service</Link>
</label>

                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button type="submit" className="btn btn-danger btn-lg w-100">
                      Register
                    </button>
                  </div>

                  {/* Login Redirect */}
                  <div className="text-center mt-3">
                    <p>Already have an account? <Link to="/login-donor" className="text-danger">Login here</Link></p>
                  </div>

                </form>
              </div> {/* End Left Section */}

              {/* Right Section - Image */}
              <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img 
  src="https://sbtcup.org/ImageNew/component.jpg" 
  className="img-fluid rounded-4" 
  alt="Blood Donation" 
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

export default RegisterDonor;
