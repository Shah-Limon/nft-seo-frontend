import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import OrderMenu from "./OrderMenu";

const TotalOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info));
  }, []);

  return (
    <>
      <DashboardMenu></DashboardMenu>
      <div >

        <h4 className="text-center">Total Orders</h4>
        <OrderMenu></OrderMenu>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Package</th>
              <th>Price</th>
              <th>Website</th>
              <th>Email</th>
              <th>Note</th>
              <th>Payment</th>
              <th>Order</th>
              <th>Edit</th>
            </tr>
            {orders.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td data-th="Package Name">{item.customerName}</td>
                <td data-th="Package Name">{item.packageName}</td>
                <td data-th="Package Name">${item.packagePrice}</td>
                <td data-th="Website Name">{item.customerWebsite}</td>
                <td data-th="Email">{item.customerEmail}</td>
                <td data-th="note">{item.customerNote}</td>{" "}
                <td data-th="note">{item.paymentStatus}</td>{" "}
                <td data-th="note">{item.orderStatus}</td>{" "}
                <td data-th="Edit">
                  <Link to={`/admin/order/${item._id}`}>Action</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TotalOrders;
