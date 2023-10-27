import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
const EditFooterLink = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleLinks = (event) => {
    event.preventDefault();
    const linkOne = event.target.linkOne.value;
    const linkTwo = event.target.linkTwo.value;
    const linkThree = event.target.linkThree.value;
    const linkFour = event.target.linkFour.value;
    const linkFive = event.target.linkFive.value;
    const CopyRight = event.target.CopyRight.value;

    const footerLink = {
      linkOne,
      linkTwo,
      linkThree,
      linkFour,
      linkFive,
      CopyRight,
    };

    const url = `http://localhost:5000/footer-link/${id}/`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(footerLink),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting");
      });
  };

  return (
    <div>
      <form class="form mb-15" onSubmit={handleLinks}>
        <h4 className="mb-15">Update Links</h4>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Enter Link One</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Link One"
                  name="linkOne"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Link Two</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Link Two"
                  name="linkTwo"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Link Three</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Link Three"
                  name="linkThree"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Link Four</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Link Four"
                  name="linkFour"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Link Five</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Link Five"
                  name="linkFive"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter CopyRight Text</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter CopyRight Text"
                  name="CopyRight"
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </form>

      
    </div>
  );
};

export default EditFooterLink;
