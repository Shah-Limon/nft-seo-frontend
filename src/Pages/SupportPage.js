import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const SupportPage = () => {
  const [user] = useAuthState(auth);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tickets`)
      .then((res) => res.json())
      .then((info) => setTickets(info));
  }, []);

  return (
    <>
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row mb-0">
                <div className="col">
                  <Link
                    to="/user-dashboard/create-ticket/"
                    type="sumbit"
                    className="action-btn"
                  >
                    <span>Create Ticket</span>
                  </Link>
                </div>
              </div>
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Support</span>
                </h6>

                <h3 className="heading">
                  We Hope You Find What You
                  <br />
                  are Looking for
                </h3>

                <div className="container">
                  <h5 mt-15>List of the Submitted Tickets</h5>
                  <table className="rwd-table" style={{ marginTop: "2rem" }}>
                    <tbody>
                      <tr>
                        <th>SL No.</th>
                        <th>Subject</th>
                        <th>Status</th>

                        <th>View</th>
                        
                      </tr>
                      {tickets.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                         
                          <td>{item.subject}</td>
                          <td>{item.ticketStatus}</td>

                          <td>
                            <Link to={`/user-dashboard/support/${item._id}`}>
                              Edit
                            </Link>
                          </td>
                         
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;