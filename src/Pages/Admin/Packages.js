import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Packages = () => {
  const navigate = useNavigate();

  const handlePackages = (event) => {
    event.preventDefault();
    const packageName = event.target.packageName.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    const featureOne = event.target.featureOne.value;
    const featureTwo = event.target.featureTwo.value;
    const featureThree = event.target.featureThree.value;
    const featureFour = event.target.featureFour.value;
    const featureFive = event.target.featureFive.value;
    const featureSix = event.target.featureSix.value;
    const featureSeven = event.target.featureSeven.value;
    const featureEight = event.target.featureEight.value;
    const featureNine = event.target.featureNine.value;
    const featureTen = event.target.featureTen.value;

    const websiteCheck = {
      packageName,
      price,
      img,
      featureOne,
      featureTwo,
      featureThree,
      featureFour,
      featureFive,
      featureSix,
      featureSeven,
      featureEight,
      featureNine,
      featureTen,
    };

    const url = `http://localhost:5000/add-package`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/report-sent ");
      });
  };

  return (
    <div>
      <form class="form" onSubmit={handlePackages}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Package Name</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Package Name"
                  name="packageName"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Package Price</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Package Price"
                  name="price"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Package Image Url</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Package Image Url"
                  name="img"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature One</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature One"
                  name="featureOne"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Two</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Two"
                  name="featureTwo"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Three</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type feature Three"
                  name="featureThree"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Four</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Four"
                  name="featureFour"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Five</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Five"
                  name="featureFive"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Six</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Six"
                  name="featureSix"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Seven</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Seven"
                  name="featureSeven"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Eight</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Eight"
                  name="featureEight"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Nine</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Nine"
                  name="featureNine"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Feature Ten</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Feature Ten"
                  name="featureTen"
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Add Package</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Packages;
