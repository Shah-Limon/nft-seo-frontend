import React from "react";
import { Link } from "react-router-dom";

const OrderMenu = () => {
  return (
    <div>
      <section className="project s2">
        <div className="shape right" />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <Link to="/admin/orders/pending" class="action-btn ">
                <span> Pending Orders</span>
              </Link>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/orders/accepted" class="action-btn ">
                    Accepted Orders
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderMenu;
