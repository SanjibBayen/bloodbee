import React, { useState } from 'react';
import { lable } from '../../assets/img';
import { Link, useNavigate } from 'react-router-dom';

function LoginStaff() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validCredentials = [
    { email: 'staff@hospital.org', password: 'staff123' },
    { email: 'nurse@bloodbank.com', password: 'nurse2024' },
    { email: 'admin@bloodcenter.org', password: 'admin123' },
    { email: 'doctor@clinic.com', password: 'doctor456' },
    { email: 'tech@bloodlab.com', password: 'labtech789' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!formData.agreeTerms) {
      setError('Please agree to the Terms of Service');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Check if provided credentials match any of the valid credentials
      const validUser = validCredentials.find(
        user => user.email === formData.email && user.password === formData.password
      );
      
      if (validUser) {
        // Store login state in localStorage or sessionStorage
        localStorage.setItem('staffLoggedIn', 'true');
        localStorage.setItem('staffEmail', formData.email);
        
        // Redirect to staff dashboard
        navigate('/request-donor');
      } else {
        setError('Invalid email or password. Try using one of the demo accounts listed below.');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div>
      <div className="text-center p-3 container-md">
      
      </div>
      <div id="intro-example" className="text-center bg-image align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome Back Staff!</p>
                        
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}
                        
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="email" 
                                name="email" 
                                id="form3Example3c" 
                                className="form-control" 
                                placeholder="Your email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input 
                                type="password" 
                                name="password" 
                                id="form3Example4c" 
                                className="form-control" 
                                placeholder="Password" 
                                value={formData.password}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input 
                              className="form-check-input me-2" 
                              type="checkbox" 
                              id="form2Example3c" 
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="form2Example3">
                              I agree all statements in <a href="#">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button 
                              type="submit" 
                              name="login" 
                              className="btn btn-primary btn-lg"
                              disabled={loading}
                            >
                              {loading ? 'Logging in...' : 'Login'}
                            </button>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <p className="small mb-0">Don't have an account? <Link to="/register-staff">Create an account</Link></p>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <Link to={'/request-donor'}>
                          <img src={lable} className="img-fluid rounded-4" alt="Sample image" />
                        </Link>
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
}

export default LoginStaff;