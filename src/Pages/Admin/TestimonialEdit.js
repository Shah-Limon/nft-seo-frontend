import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const TestimonialEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonial/${id}`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, [id]);

  let rowNumber = 1;

  const handleTestimonial = (event) => {
    event.preventDefault();
    const personName = event.target.personName.value;
    const personTitle = event.target.personTitle.value;
    const personImg = event.target.personImg.value;
    const desc = event.target.desc.value;
  

    const testimonial = {
        personName,
        personTitle,
        personImg,
        desc,
    };

    const url = `http://localhost:5000/testimonial/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonial),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage");
      });
  };

  return (
    <div>
      <form class="form" onSubmit={handleTestimonial}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Person Name</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Name"
                  name="personName"
                  defaultValue={testimonial.personName}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Person Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Title"
                  name="personTitle"
                  defaultValue={testimonial.personTitle}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Person Image</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Person Image"
                  name="personImg"
                  defaultValue={testimonial.personImg}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Testimonial Description</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Testimonial Description"
                  name="desc"
                  defaultValue={testimonial.desc}
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Update Testimonial</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TestimonialEdit;
