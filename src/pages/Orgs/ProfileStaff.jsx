import React, { useState, useEffect } from 'react';
import { Footer, Navigation } from '../../components/Elements';
import { splash1 } from '../../assets/img';

const ProfileStaff = ({ staffData }) => {
  return (
    <div>
      <Navigation username={'Mike Junior'} profileColor={'primary'}/>
      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
        </div>
      </div>
      <section style={{ backgroundColor: '#eee' }} className="container mb-4">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src={splash1} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                  <h5 className="my-3">{staffData.full_name}</h5>
                  <p className="text-muted mb-1">{staffData.job_title}</p>
                  <p className="text-muted mb-4">{staffData.address}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Active</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Deactivate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{staffData.full_name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{staffData.email}</p>
                    </div>
                  </div>
                  <hr />
               
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{staffData.phone_number}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{staffData.address}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProfileStaff;
