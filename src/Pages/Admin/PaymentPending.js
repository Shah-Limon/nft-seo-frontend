import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import OrderMenu from "./OrderMenu";

const PaymentPending = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info));
  }, []);

  // Filter orders with paymentStatus === "Pending"
  const pendingOrders = orders.filter(
    (order) => order.paymentStatus === "Pending"
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
      <div>
        <h4 className="text-center">Total Pending Payments</h4>
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
              <th>Payment Status</th>
              
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
                <td>{item.paymentStatus}</td>
               
                <td>
                  <Link to={`/admin/order/${item._id}`}>Action</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination mb-15">
          <ul>
            <li>
              <Link
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg
                  width={10}
                  height={15}
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1212 7.46543L7.56346 13.8092C7.8205 14.0662 8.23613 14.0662 8.49317 13.8092L8.88144 13.4209C9.13848 13.1639 9.13848 12.7482 8.88144 12.4912L3.2869 7.00059L8.87598 1.50997C9.133 1.25293 9.133 0.837303 8.87598 0.580281L8.48769 0.191991C8.23067 -0.0650311 7.81504 -0.0650311 7.558 0.191991L1.11578 6.53574C0.864303 6.79278 0.864302 7.20841 1.1212 7.46543Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </Link>
            </li>
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
            <li>
              <Link
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <svg
                  width={10}
                  height={15}
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.8788 7.46543L2.43654 13.8092C2.1795 14.0662 1.76387 14.0662 1.50683 13.8092L1.11856 13.4209C0.861521 13.1639 0.861521 12.7482 1.11856 12.4912L6.7131 7.00059L1.12402 1.50997C0.866998 1.25293 0.866998 0.837303 1.12402 0.580281L1.51231 0.191991C1.76933 -0.0650311 2.18496 -0.0650311 2.442 0.191991L8.88422 6.53574C9.1357 6.79278 9.1357 7.20841 8.8788 7.46543Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PaymentPending;
