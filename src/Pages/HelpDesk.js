import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import BackToAdminDashboard from "./Admin/BackToAdminDashboard";

const HelpDesk = () => {
  const [user] = useAuthState(auth);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tickets`)
      .then((res) => res.json())
      .then((info) => setTickets(info.reverse()));
  }, []);

  return (
    <>
   
      <section className="faq">
        <div className="container">
        <BackToAdminDashboard></BackToAdminDashboard>
          <div className="row mt-15">
            <div className="col-12">
              <div className="row mb-0"></div>
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Help Desk</span>
                </h6>

                <h3 className="heading">Customer Support Hub</h3>

                <div className="container">
                  <h5 mt-15>List of the User Submitted Tickets</h5>
                  <table className="rwd-table" style={{ marginTop: "2rem" }}>
                    <tbody>
                      <tr>
                        <th>SL No.</th>
                        <th>Ticket ID</th>
                        <th>Subject</th>
                        <th>Sender</th>
                        <th>Status</th>

                        <th>View</th>
                      </tr>
                      {tickets.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>

                          <td>{item.TicketId}</td>
                          <td>{item.subject}</td>
                          <td>{item.ticketCreator}</td>
                          <td>{item.ticketStatus}</td>

                          <td>
                            <Link to={`/admin/help-desk/${item._id}`}>
                            View
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

export default HelpDesk;
