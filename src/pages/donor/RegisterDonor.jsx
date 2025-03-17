import React, { useState } from 'react';
import { lable } from '../../assets/img'; 
import { Link } from 'react-router-dom';

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
    <div className="container-md text-center p-3">
      <div className="text-center bg-image align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5">
                        <p className="text-center h1 fw-bold mb-5">Blood Donor Register</p>
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          {Object.keys(formData).map((key) => (
                            key !== 'agreeTerms' && (
                              <div className="d-flex flex-row align-items-center mb-4" key={key}>
                                <input 
                                  type={key.includes('password') ? 'password' : key === 'phone' ? 'number' : 'text'}
                                  name={key}
                                  value={formData[key]}
                                  onChange={handleChange}
                                  className="form-control"
                                  placeholder={`Your ${key.replace('_', ' ')}`}
                                />
                              </div>
                            )
                          ))}
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" 
                              type="checkbox" 
                              name="agreeTerms" 
                              checked={formData.agreeTerms} 
                              onChange={handleChange} 
                            />
                            <label className="form-check-label">
                              I agree to all statements in <a href="#">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center">
                            <button className="btn btn-primary btn-lg">Register</button>
                          </div>
                          <div className="d-flex justify-content-center mt-3">
                            <p>Already have an account? <Link to="/login-donor">Login here</Link></p>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                        <img src={lable} className="img-fluid rounded-4" alt="Sample" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterDonor;