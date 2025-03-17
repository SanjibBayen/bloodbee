import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lable } from '../../assets/img';

const RegisterStaff = () => {
  // Add state to store form data
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    address: '',
    phone: '',
    department: '',
    jobTitle: '',
    hospital: '',
    gender: '',
    email: '',
    password: '',
    password_confirmation: '',
    termsAgreed: false
  });

  // Add state for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.hospital.trim()) newErrors.hospital = 'Hospital ID is required';
    if (!formData.gender) newErrors.gender = 'Please select your gender';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Passwords do not match';
    }
    
    if (!formData.termsAgreed) {
      newErrors.terms = 'You must agree to the terms of service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      // Submit form data
      console.log('Form data submitted:', formData);
      // Add your API call or form submission logic here
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div>
      <div className="text-center p-3 container-md"></div>
      <div id="intro-example" className="text-center bg-image align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Staff Register here</p>
                        
                        {/* General error message */}
                        {errors.general && (
                          <p className="text-center text-danger mb-5 mx-1 mx-md-4 mt-4">{errors.general}</p>
                        )}
                        
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="text" 
                                name="name" 
                                id="form3Example1c" 
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && (
                                <span className="text-danger">{errors.name}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="text" 
                                name="username" 
                                id="usernameInput" 
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                placeholder="Your Username" 
                                value={formData.username}
                                onChange={handleChange}
                              />
                              {errors.username && (
                                <span className="text-danger">{errors.username}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="text" 
                                name="address" 
                                id="addressInput" 
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                placeholder="Your Address" 
                                value={formData.address}
                                onChange={handleChange}
                              />
                              {errors.address && (
                                <span className="text-danger">{errors.address}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="number" 
                                name="phone" 
                                id="phoneInput" 
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                placeholder="Your Phone Number" 
                                value={formData.phone}
                                onChange={handleChange}
                              />
                              {errors.phone && (
                                <span className="text-danger">{errors.phone}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-house fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="text" 
                                name="department" 
                                id="departmentInput" 
                                className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                                placeholder="Your Department Name" 
                                value={formData.department}
                                onChange={handleChange}
                              />
                              {errors.department && (
                                <span className="text-danger">{errors.department}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-hospital fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="text" 
                                name="jobTitle" 
                                id="jobTitleInput" 
                                className={`form-control ${errors.jobTitle ? 'is-invalid' : ''}`}
                                placeholder="Your Hospital title" 
                                value={formData.jobTitle}
                                onChange={handleChange}
                              />
                              {errors.jobTitle && (
                                <span className="text-danger">{errors.jobTitle}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-hospital fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="number" 
                                name="hospital" 
                                id="hospitalInput" 
                                className={`form-control ${errors.hospital ? 'is-invalid' : ''}`}
                                placeholder="Your Hospital ID" 
                                value={formData.hospital}
                                onChange={handleChange}
                              />
                              {errors.hospital && (
                                <span className="text-danger">{errors.hospital}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-person fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <select 
                                name="gender" 
                                id="genderSelect" 
                                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                value={formData.gender}
                                onChange={handleChange}
                              >
                                <option value="">Your Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                              {errors.gender && (
                                <span className="text-danger">{errors.gender}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="email" 
                                name="email" 
                                id="emailInput" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Your email" 
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <span className="text-danger">{errors.email}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="password" 
                                name="password" 
                                id="passwordInput" 
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                placeholder="Password" 
                                value={formData.password}
                                onChange={handleChange}
                              />
                              {errors.password && (
                                <span className="text-danger">{errors.password}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="password" 
                                name="password_confirmation" 
                                id="confirmPasswordInput" 
                                className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                                placeholder="Confirm Password" 
                                value={formData.password_confirmation}
                                onChange={handleChange}
                              />
                              {errors.password_confirmation && (
                                <span className="text-danger">{errors.password_confirmation}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input 
                              className={`form-check-input me-2 ${errors.terms ? 'is-invalid' : ''}`} 
                              type="checkbox" 
                              name="termsAgreed"
                              id="termsCheckbox" 
                              checked={formData.termsAgreed}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="termsCheckbox">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                            {errors.terms && (
                              <div className="invalid-feedback">{errors.terms}</div>
                            )}
                          </div>
                          
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                          </div>
                          
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <p className="small mb-0">Already have an account? <Link to="/login-staff">login at your account</Link></p>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src={lable} className="img-fluid rounded-4" alt="Sample image" />
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

export default RegisterStaff;