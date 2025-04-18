import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const LoginDonor = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Additional login logic can be added here

        // Navigate to the OrganizationDashboard
        navigate('/organization-dashboard');
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
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                <h1 className="text-center fw-bold mb-5">
                                                    Welcome Back <span style={{ color: 'red' }}>Staff!</span> 
                                                </h1>
                                                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                    <div className="mb-4 input-group">
                                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                                        <input 
                                                            type="email" 
                                                            name="email" 
                                                            id="email" 
                                                            className="form-control" 
                                                            placeholder="Your email" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="mb-4 input-group">
                                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                                        <input 
                                                            type="password" 
                                                            name="password" 
                                                            id="password" 
                                                            className="form-control" 
                                                            placeholder="Password" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="form-check d-flex justify-content-center mb-4">
                                                        <input className="form-check-input me-2" type="checkbox" id="terms" required />
                                                        <label className="form-check-label" htmlFor="terms">
                                                            I agree to all statements in <a href="#!" style={{ color: 'red' }}>Terms of Service</a>
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <p>Don't have an account? <Link to="/register-staff" style={{ color: 'red' }}>Create an account</Link></p>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <Link to='/organization-dashboard'>
                                                    <img 
                                                        src="https://img.freepik.com/premium-vector/blood-donor-day-illustration-with-blood-drip_95561-345.jpg?semt=ais_hybrid" 
                                                        className="img-fluid rounded-4" 
                                                        alt="Blood Donation" 
                                                        style={{ width: '500px', height: 'auto' }} 
                                                    />
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
};

export default LoginDonor;
