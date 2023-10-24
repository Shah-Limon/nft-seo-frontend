import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";

const PayNow = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`)
      .then((res) => res.json())
      .then((info) => setOrder(info));
  }, [id]);
  return (
    <>
      <section className="banner s2">
        <div className="shape" />
        <div className="shape right" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Pay Now</span>
                </h6>
                <h2 className="heading">
                  {order.packageName}
                  <span className="arlo_tm_animation_text_word" /> <br />
                </h2>
                <div>
                  <div id="payment-box">
                    <h5 className="mb-15">Price: {order.packagePrice}$</h5>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <input
                        type="hidden"
                        name="business"
                        value="whiteleads.net@gmail.com"
                      />
                      <input
                        type="hidden"
                        name="item_name"
                        value={order.packageName}
                      />
                      <input type="hidden" name="item_number" value="1" />
                      <input
                        type="hidden"
                        name="amount"
                        value={order.packagePrice}
                      />
                      <input type="hidden" name="no_shipping" value="1" />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input
                        type="hidden"
                        name="notify_url"
                        value="http://sitename/paypal-payment-gateway-integration-in-php/notify.php"
                      />
                      <input
                        type="hidden"
                        name="cancel_return"
                        value="http://localhost:3000/user-dashboard/my-orders/"
                      />
                      <input
                        type="hidden"
                        name="return"
                        value="http://sitename/paypal-payment-gateway-integration-in-php/return.php"
                      />
                      <input type="hidden" name="cmd" value="_xclick" />
                      <input
                        type="submit"
                        name="pay_now"
                        id="pay_now"
                        className="paypay--btn"
                        value="Pay Now With Paypal"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayNow;
