// import React, { useEffect, useState } from "react";
// import "./Dashboard.css";
// import { Link } from "react-router-dom";
// import DashboardMenu from "./DashboardMenu";
// import OrderMenu from "./OrderMenu";

// const TotalOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/orders`)
//       .then((res) => res.json())
//       .then((info) => setOrders(info));
//   }, []);

//   return (
//     <>
//       <DashboardMenu></DashboardMenu>
//       <div>
//         <h4 className="text-center">Total Orders</h4>
//         <OrderMenu></OrderMenu>
//         <table className="rwd-table">
//           <tbody>
//             <tr>
//               <th>SL No.</th>
//               <th>Name</th>
//               <th>Package</th>
//               <th>Price</th>
//               <th>Website</th>
//               <th>Email</th>
//               <th>Note</th>
//               <th>Payment</th>
//               <th>Order</th>
//               <th>Edit</th>
//             </tr>
//             {orders.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>
//                 <td data-th="Package Name">{item.customerName}</td>
//                 <td data-th="Package Name">{item.packageName}</td>
//                 <td data-th="Package Name">${item.packagePrice}</td>
//                 <td data-th="Website Name">{item.customerWebsite}</td>
//                 <td data-th="Email">{item.customerEmail}</td>
//                 <td data-th="note">{item.customerNote}</td>{" "}
//                 <td data-th="note">{item.paymentStatus}</td>{" "}
//                 <td data-th="note">{item.orderStatus}</td>{" "}
//                 <td data-th="Edit">
//                   <Link to={`/admin/order/${item._id}`}>Action</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default TotalOrders;


import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import OrderMenu from "./OrderMenu";

const TotalOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((info) => setOrders(info.reverse()));
  }, []);

   // Filter the orders with paymentStatus === "Received"
   const receivedOrders = orders.filter((order) => order.paymentStatus === 'Received');

   // Calculate the total spend
   const totalSpend = receivedOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0);

 
  // Sort orders by order date in descending order (most recent first)
  const sortedOrders = [...orders].sort((a, b) => {
    return new Date(b.orderDate) - new Date(a.orderDate);
  });

  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };


  return (
    <>
      <DashboardMenu></DashboardMenu>
     <div className="project s2">
     <div className="container">
        <h4 className="text-center">Total Sales $({totalSpend})usd</h4>
        <h4 className="text-center">Total Orders</h4>
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
              <th>Payment</th>
              <th>Order</th>
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
                <td>{item.customerNote}</td> <td>{item.paymentStatus}</td>{" "}
                <td>{item.orderStatus}</td>{" "}
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
     </div>
    </>
  );
};

export default TotalOrders;
