import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";

const ReceivedPayment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to update payment status and automatically submit the form
    const updatePaymentStatusAndSubmitForm = async () => {
      try {
        const updateOrder = { paymentStatus: "Received" };
        const url = `http://localhost:5000/payment-received/${id}`;
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
            document.getElementById("receivedPaymentForm").submit();
            navigate("/user-dashboard");
          }, 1000);
        } else {
          // Handle error if the update request fails
          // You can add error handling logic here
        }
      } catch (error) {
        // Handle any other errors that may occur during the process
        // You can add error handling logic here
      }
    };

    updatePaymentStatusAndSubmitForm();
  }, [id, navigate]);

  return (
    <div>
      <section className="testimonials s2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                <div className="block-text center">
                  <h4 className="heading">We have received your payment.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form
        id="receivedPaymentForm"
        onSubmit={(event) => event.preventDefault()}
      >
        <input hidden type="text" name="paymentStatus" value="Received"></input>
        <input hidden type="submit" value="Payment Received"></input>
      </form>
    </div>
  );
};

export default ReceivedPayment;
