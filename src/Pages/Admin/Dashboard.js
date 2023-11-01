import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/website`)
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  return (
    <>
      <DashboardMenu></DashboardMenu>

      <div className="container">
        <h5 className="text-center mt-15">Report List for User</h5>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Website Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>-</th>
            </tr>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td data-th="Website Name">{item.website}</td>
                <td data-th="Email">{item.email}</td>
                <td data-th="Edit">
                  <Link to={`/admin/website-edit/${item._id}`}>Edit</Link>
                </td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
