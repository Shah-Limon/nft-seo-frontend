import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EnableCashOndelivery = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cashenable, setCashenable] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cash-on-delivery/${id}`)
      .then((res) => res.json())
      .then((info) => setCashenable(info));
  }, [id]);

  const handleCashOnDeliveryEnable = (event) => {
    event.preventDefault();
    const cashOnDeliveryStatus = event.target.cashOnDeliveryStatus.value;

    const cashOnDeliveryInfo = { cashOnDeliveryStatus };

    const url = `http://localhost:5000/cash-on-delivery/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cashOnDeliveryInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/dashboard");
      });
  };
  return (
    <div>
      {cashenable.cashOnDeliveryStatus === 'Disabled' &&
        <form onSubmit={handleCashOnDeliveryEnable}>
          <input
            hidden
            type="text"
            value="Enabled"
            name="cashOnDeliveryStatus"
          ></input>
          <input type="submit" value="Enable Now"></input>
        </form>
      }
    </div>
  );
};

export default EnableCashOndelivery;
