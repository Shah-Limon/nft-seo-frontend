import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToAdminDashboard from "./Admin/BackToAdminDashboard";

const SubscriptionMail = () => {
  const [mail, setMail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/subscription-email`)
      .then((res) => res.json())
      .then((info) => setMail(info));
  }, []);

  return (
    <>
      <div className="container payment-setting" data-aos="fade-up" data-aos-duration={2000}>
      <BackToAdminDashboard></BackToAdminDashboard>
       
        <table className="rwd-table">
        <h5 className="mb-15">Subscription Email</h5>
          <tbody>
            <tr>
              <th>SL No.</th>

              <th>Email</th>

              <th>-</th>
            </tr>
            {mail.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>

                <td data-th="Email">{item.email}</td>

                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubscriptionMail;
