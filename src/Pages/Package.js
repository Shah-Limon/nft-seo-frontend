import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";

const Package = () => {
  const [p, setPackage] = useState([]);
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/package/${id}`)
      .then((res) => res.json())
      .then((info) => setPackage(info));
  }, [id]);

  const handleOrder = (event) => {
    event.preventDefault();
    const packageId = event.target.packageId.value;
    const packageName = event.target.packageName.value;
    const packagePrice = event.target.packagePrice.value;
    const paymentStatus = event.target.paymentStatus.value;
    const orderStatus = event.target.orderStatus.value;
    const customerEmail = event.target.customerEmail.value;
    const customerName = event.target.customerName.value;
    const customerWebsite = event.target.customerWebsite.value;
    const customerNote = event.target.customerNote.value;

    const order = {
      packageId,
      packageName,
      packagePrice,
      paymentStatus,
      orderStatus,
      customerEmail,
      customerName,
      customerWebsite,
      customerNote,
    };

    const url = `http://localhost:5000/new-order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/pay-now");
      });
  };

  return (
    <div className="container">
      <h2>You are ordering {p.packageName}</h2>
      <br></br>
      <h2>Price ${p.price}</h2>
      <br></br>
      <form class="form" onSubmit={handleOrder}>
        <div class="container">
          <div class="justify-content-center align-items-baseline">
            {/* hidden */}
            <input type="text" value={p._id} name="packageId" hidden></input>
            <input
              hidden
              type="text"
              value={p.packageName}
              name="packageName"
            ></input>
            <input
              type="text"
              value={p.price}
              name="packagePrice"
              hidden
            ></input>

            <input
              type="text"
              value="Pending"
              name="paymentStatus"
              hidden
            ></input>

            <input
              type="text"
              value="Pending"
              name="orderStatus"
              hidden
            ></input>

            {/*  */}
            <div class="col-sm">
              <label className="mt-1">Email</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  value={user?.email}
                  name="customerEmail"
                />
              </div>
            </div>

            <div class="col-sm">
              <label className="mt-1">Your Full Name</label>
              <div class="form-group mb-3">
                <input type="text" class="form-control" name="customerName" />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Your Website</label>
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="customerWebsite"
                />
              </div>
            </div>
            <div class="col-sm">
              <label className="mt-1">Customer Note</label>
              <div class="form-group mb-3">
                <input type="text" class="form-control" name="customerNote" />
              </div>
            </div>

            <div class="col-sm">
              <button type="submit" class="action-btn">
                <span>Continue</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Package;
