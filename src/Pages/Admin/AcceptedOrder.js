import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const AcceptedOrder = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

  // Filter orders with orderStatus === "Accepted"
  const pendingOrders = orders.filter(
    (order) => order.orderStatus === "Accepted"
  );

  const paginatedOrders = pendingOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(pendingOrders.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="hight-full">
        <h4 className="text-center">Total Orders Accepted</h4>
        <OrderMenu></OrderMenu>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Date</th>
              <th>Name</th>
              <th>Package</th>
              <th>Price</th>
              <th>Website</th>
              <th>Email</th>
              <th>Note</th>
            
              <th>Order Status</th>
              <th>Edit</th>
            </tr>
            {paginatedOrders.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                <td>{item.orderDate}</td>
                <td>{item.customerName}</td>
                <td>{item.packageName}</td>
                <td>${item.packagePrice}</td>
                <td>{item.customerWebsite}</td>
                <td>{item.customerEmail}</td>
                <td>{item.customerNote}</td>
              
                <td>{item.orderStatus}</td>
                <td>
                  <Link to={`/admin/order/${item._id}`}>Action</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination mb-15">
          <ul>
           
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <Link
                  onClick={() => changePage(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default AcceptedOrder;
