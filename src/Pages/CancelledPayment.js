import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";

const CancelledPayment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to update payment status
    const updatePaymentStatus = async () => {
      try {
        const updateOrder = { paymentStatus: "Cancelled" };
        const url = `http://localhost:5000/payment-cancelled/${id}`;
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateOrder),
        });

        if (response.ok) {
          // Wait for 2 seconds, then submit the form and navigate
          setTimeout(() => {
            document.getElementById("cancelPaymentForm").submit();
            navigate("/user-dashboard");
          }, 2000);
        } else {
          // Handle error if the update request fails
          // You can add error handling logic here
        }
      } catch (error) {
        // Handle any other errors that may occur during the process
        // You can add error handling logic here
      }
    };

    updatePaymentStatus();
  }, [id, navigate]);

  return (
    <div>
      <section className="testimonials s2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                <div className="block-text center">
                  <h4 className="heading">You have cancelled the payment</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form id="cancelPaymentForm" onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          hidden
          name="paymentStatus"
          value="Cancelled"
        ></input>
        <input type="submit" hidden value="Cancel Payment Now"></input>
      </form>
    </div>
  );
};

export default CancelledPayment;
