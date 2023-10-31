import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

const Setting = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);
  return (
    <>
      <section
        className="project s2 payment-setting"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="shape right" />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-general/" className="h5 title">
                    General Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-header/" className="h5 title">
                    Header Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-footer" className="h5 title">
                    Footer Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-payment" className="h5 title">
                    Payment Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-homepage" className="h5 title">
                    HomePage Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/about-page" className="h5 title">
                    About Page Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  {contact.map((e) => (
                    <Link
                      to={`/admin/edit-contact-page/${e._id}`}
                      className="h5 title"
                    >
                      Contact Page Setting
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
