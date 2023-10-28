import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
const EditBannerSlider = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/slider/${id}`)
      .then((res) => res.json())
      .then((info) => setSliders(info));
  }, [id]);

  let rowNumber = 1;

  const handleSlider = (event) => {
    event.preventDefault();

    const sliderTitle = event.target.sliderTitle.value;
    const sliderDesc = event.target.sliderDesc.value;
    const sliderImg = event.target.sliderImg.value;

    const sliderUpdate = {
      sliderTitle,
      sliderDesc,
      sliderImg,
    };

    const url = `http://localhost:5000/slider/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sliderUpdate),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  return (
    <div>
      <form class="form" onSubmit={handleSlider}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <h4 className="sub-heading">
              <span>Update Slider</span>
            </h4>
            <div class="col-sm">
              <label className="mt-1">Enter Slider Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Slider Title"
                  name="sliderTitle"
                  defaultValue={sliders.sliderTitle}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Slider Short Description</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Slider Short Description"
                  name="sliderDesc"
                  defaultValue={sliders.sliderDesc}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Slider Image URL</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Slider Image URL"
                  name="sliderImg"
                  defaultValue={sliders.sliderImg}
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Update Slider</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBannerSlider;
