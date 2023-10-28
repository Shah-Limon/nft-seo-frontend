import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
const BannerSliderList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sliders, setSliders] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/sliders`)
      .then((res) => res.json())
      .then((info) => setSliders(info));
  }, []);


  let rowNumber = 1;

  const handleSlider = (event) => {
    event.preventDefault();

    const sliderTitle = event.target.sliderTitle.value;
    const sliderDesc = event.target.sliderDesc.value;
    const sliderImg = event.target.sliderImg.value;
    

    const slider = {
        sliderTitle,
        sliderDesc,
        sliderImg
    };

    const url = `http://localhost:5000/slider`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(slider),
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
              <span>Add Slider</span>
            </h4>
            <div class="col-sm">
              <label className="mt-1">Enter Slider Title</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Slider Title"
                  name="sliderTitle"
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
                />
              </div>
            </div>
            

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Add Slider</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      
      <div className="container">
        <table className="rwd-table">
        <h5 className="sub-heading mb-15">
              <span>Slider List</span>
            </h5>
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Slider Title</th>

              <th>Edit</th>
            </tr>
            {sliders.map((item) => (
              <tr key={item._id}>
                <td>{rowNumber++}</td>
                <td>{item.sliderTitle}</td>
                <td data-th="Edit">
                  <Link to={`/admin/edit-slider/${item._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BannerSliderList;
