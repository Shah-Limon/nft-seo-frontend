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
                    Packages (Add or edit)
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
                  <a href="nft.html" className="h5 title">
                    Pomeranian Doge
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <a href="nft.html" className="h5 title">
                    3D Digital Artwork
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <a href="nft.html" className="h5 title">
                    Nintendo Switch
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <a href="nft.html" className="h5 title">
                    The Strange Art
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <a href="nft.html" className="h5 title">
                    Pixel Art Addicted
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <a href="nft.html" className="h5 title">
                    3D Digital Artwork
                  </a>
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
