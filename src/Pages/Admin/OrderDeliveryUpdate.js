import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderDeliveryUpdate = () => {
  const { id } = useParams();
  const [order, setorder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://nft-seo-server.vercel.app/order/${id}`)
      .then((res) => res.json())
      .then((info) => setorder(info));
  }, [id]);

  const handlePaymentStatus = event => {
    event.preventDefault();
    const deliveryStatus = event.target.deliveryStatus.value;
    
    const deliveryUpdate = {deliveryStatus};

    const url = `https://nft-seo-server.vercel.app/delivery-status/${order._id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(deliveryUpdate)
    })
        .then(res => res.json())
        .then(result => {
            navigate('/admin/orders');

        })
};


  return (
    <div>
      <form onSubmit={handlePaymentStatus}>
        <select name="deliveryStatus">
          <option value="Delivered">Delivered</option>
          <option value="NotDelivered">Not Delivered</option>
          <option value="ProcessingDelivery">Delivery Processing</option>
        </select>
        <input type='submit' value='Update'></input>
      </form>
    </div>
  );
};

export default OrderDeliveryUpdate;
