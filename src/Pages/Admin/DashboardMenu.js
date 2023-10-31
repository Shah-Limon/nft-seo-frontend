import React from "react";
import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <>
      <section className="project s2">
        <div className="shape right" />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/packages/" className="h5 title">
                    Packages (edit)
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/orders/" className="h5 title">
                    Total Orders
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting" className="h5 title">
                   Setting Option
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/help-desk/" className="h5 title">
                   Help Desk
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/subscription-email/" className="h5 title">
                    Subscription Email
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  
                    <Link to="/admin/contact-messages/" className="h5 title">
                      Contact Messages
                    </Link>
                 
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardMenu;
