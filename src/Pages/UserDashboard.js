import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const UserDashboard = () => {
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/website`)
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  let rowNumber = 1;

  return (
    <>
      <div className="container">
        <h3 className="text-center">Your Submitted List</h3>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Website Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Report</th>
            </tr>

            {data.map((list) => {
              if (list.userMail === user?.email) {
                return (
                  <tr key={list._id}>
                    <td>{rowNumber++}</td> {/* Increment the row number */}
                    <td data-th="Website Name">{list.website}</td>
                    <td data-th="Email">{list.email}</td>
                    <td data-th="Email">pending</td>
                    <td data-th="Edit">
                      <Link to={`/admin/website-edit/${list._id}`}>Edit</Link>
                    </td>
                    <td data-th="View">
                    <Link to={`/report/${list._id}`} className="action-btn"><span>View</span></Link>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDashboard;
