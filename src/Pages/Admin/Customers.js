import React, { useEffect, useState } from "react";

const Customers = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setorders(info));
  }, []);

  return (
    <div className="container mx-auto items-center">
      <div className=" w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Order Prduct</th>
                  <th>Prduct Price</th>
                  <th>Customer Address</th>
                  <th>Payment Status</th>
                  <th>Order Status</th>
                  <th>Delivery Status</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {orders
                  .map((order) => (
                    <tr>
                      <td className="font-bold">{order.customerName}</td>
                      <td>{order.ProductName}</td>
                      <td>{order.ProductPrice}</td>
                      <td>
                        {order.customerAddress},{order.customerUpozilaName},
                        
                        <p>{order.customerDistrictName}{order.customerPhoneNumber}</p>
                      </td>
                      <td>{order.paymentStatus}</td>
                      <td>{order.orderStatus}</td>
                      <td>{order.deliveryStatus}</td>
                      <button class="btn btn-sm flex items-center justify-center m-2">edit</button>

                    </tr>
                  ))
                  .reverse()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
