import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const HomaPageSetting = () => {
  const { id } = useParams();
  const [paymentEmail, setPaymentEmail] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [about, setAbout] = useState([]);
  const [banner, setBanner] = useState([]);
  const [speciality, SetSpeciality] = useState([]);
  const [choose, SetChoose] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/speciality/`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => SetChoose(info));
  }, []);

  return (
    <div>
      <section className="participants">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Banner Options</h5>

                  {banner.map((e) => (
                    <Link
                      to={`/admin/edit-banner-option/${e._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">About Us Option</h5>

                  {about.map((editAbout) => (
                    <Link
                      to={`/admin/about-edit/${editAbout._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Our Speciality Option</h5>

                  {speciality.map((e) => (
                    <Link
                      to={`/admin/speciality-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Why Choose Option</h5>

                  {choose.map((e) => (
                    <Link
                      to={`/admin/why-choose-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Road Map Option</h5>

                  {speciality.map((e) => (
                    <Link
                      to={`/admin/speciality-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Team Members Option</h5>

                  {speciality.map((e) => (
                    <Link
                      to={`/admin/speciality-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Testimonials Option</h5>

                  {speciality.map((e) => (
                    <Link
                      to={`/admin/speciality-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">FAQs Option</h5>

                  {speciality.map((e) => (
                    <Link
                      to={`/admin/speciality-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>update</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomaPageSetting;