import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactUsMessages = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contact-messages`)
      .then((res) => res.json())
      .then((info) => setMessage(info.reverse()));
  }, []);

  return (
    <>
      <div className="container">
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>SL No.</th>
              <th>Date</th>
              <th>Sender</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Details</th>
            </tr>
            {message.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.name}</td>

                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>
                  <Link
                    to={`/admin/contact-message/${item._id}`}
                    className="title"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactUsMessages;
