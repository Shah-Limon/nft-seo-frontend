import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactPageEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState([]);

  const handleEditContactPage = (event) => {
    event.preventDefault();
    const titleTopText = event.target.titleTopText.value;
    const titleOne = event.target.titleOne.value;
    const titleTwo = event.target.titleTwo.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const img = event.target.img.value;

    const contact = {
        titleTopText,
        titleOne,
        titleTwo,
        address,
        phone,
        email,
        img,
    };

    const url = `http://localhost:5000/contact/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/contact/${id}`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);

  return (
    <div>
      <form class="form mb-15" onSubmit={handleEditContactPage}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            <div class="col-sm">
              <label className="mt-1">Title Top Text</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Title Top Text"
                  name="titleTopText"
                  defaultValue={contact.titleTopText}
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Title (1st Part)</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Title"
                  name="titleOne"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Title (2nd Part)</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Title"
                  name="titleTwo"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Address</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Your Address"
                  name="address"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Phone Number</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Phone Number"
                  name="phone"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Email</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type Email"
                  name="email"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Enter Contact Page Image URL </label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Contact Page Image URL"
                  name="img"
                />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Update Contact</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPageEdit;
