import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Appointments, HomeDonor, ProfileDonor, LoginDonor, RegisterDonor, BloodDonationUI } from "./pages/donor/Donor";
import Home from "./pages/Home";
import BloodSearchResults from "./pages/BloodSearchResults"; // Import BloodSearchResults
import { AcceptRequests, LoginStaff, ProfileStaff, RegisterStaff, RequestDonor, RequestDonorCreate, SentRequests, ManageBloodRequests } from "./pages/Orgs/Orgs"; // Import ManageBloodRequests

import { donorData, dummyData, acceptData, profileData, sampleData, tryData } from "./constraints/Data"; // Add acceptData
import NavbarHome from "./components/navbarHome"; 
import { Footer } from './components/Elements';

const Layout = () => {
  const location = useLocation(); // Get the current route

  return (
    <>
      <NavbarHome />
      <div className="container-fluid p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments-donor" element={<Appointments allDonors={dummyData.allDonors} />} />
          <Route path="/home-donor" element={<HomeDonor allDonors={dummyData.allDonors} />} />
          <Route path="/login-donor" element={<LoginDonor />} />
          <Route path="/BloodDonationUI" element={<BloodDonationUI />} /> {/* Corrected route */}
          <Route path="/register-donor" element={<RegisterDonor />} />
          <Route path="/profile-donor" element={<ProfileDonor donor={donorData} />} />
          <Route path="/accepted-requests" element={<AcceptRequests allDonors={acceptData} />} />
          <Route path="/login-staff" element={<LoginStaff />} />
          <Route path="/profile-staff" element={<ProfileStaff staffData={profileData} />} />
          <Route path="/request-donor" element={<RequestDonor allDonors={sampleData} />} />
          <Route path="/request-create" element={<RequestDonorCreate />} />
          <Route path="/sent-requests" element={<SentRequests allDonors={tryData} />} />
          <Route path="/register-staff" element={<RegisterStaff />} />
          <Route path="/blood-search-results" element={<BloodSearchResults />} /> {/* Add route for BloodSearchResults */}
          <Route path="/manage-blood-requests" element={<ManageBloodRequests />} /> {/* Add route for ManageBloodRequests */}
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
