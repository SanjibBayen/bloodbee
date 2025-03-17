import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BloodSearch = () => {
  const navigate = useNavigate();

  const handleCheckBlood = () => {
    navigate("/blood-search-results");
  };

  return (
    <div className="container d-flex align-items-center justify-content-between p-4 bg-white shadow rounded">
      <div className="content" style={{ maxWidth: "60%" }}>
        <h1>
          Searching for <span className="text-danger">Blood</span>?
        </h1>
        <p className="text-muted fs-5">
          It is really quite hard going to each hospital searching for a
          specific blood type. It requires a lot of effort and time. Most cases
          don't have that kind of time. Lucky for you, we are here to make it
          super easy for you to check for blood type availability in each and
          every hospital under the jurisdiction of the Ministry Of Health with
          zero effort.
        </p>
        <button className="btn btn-danger" onClick={handleCheckBlood}>
          Check for blood availability
        </button>
      </div>
      <div className="image">
        <img
          src="https://www.shutterstock.com/image-vector/set-cartoon-blood-drops-characters-600nw-2447233915.jpg"
          alt="Blood Search"
          className="img-fluid"
          style={{ maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

export default BloodSearch;