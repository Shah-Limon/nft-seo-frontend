import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="shape" />
        <div className="container">
          <div className="row rev">
            <div className="col-xl-6 col-md-12">
              <div className="about__right">
                <div className="images">
                  <img
                    className="img1"
                    src="https://i.ibb.co/pbMfvzW/about-1.png"
                    alt=""
                  />
                  <img
                    className="img2"
                    src="https://img.freepik.com/free-vector/search-engine-optimization-online-promotion-smm-manager-cartoon-character-mobile-settings-tools-adjustment-business-platform-website-analysis-vector-isolated-concept-metaphor-illustration_335657-2715.jpg"
                    alt=""
                  />
                  <img
                    className="img3"
                    src="https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9205.jpg"
                    alt=""
                  />
                  <img
                    className="img4"
                    src="https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4510.jpg"
                    alt=""
                  />
                  <img
                    className="img5"
                    src="https://img.freepik.com/free-vector/browser-stats-concept-illustration_114360-4963.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>About us</span>
                </h6>
                <h3 className="heading wow" data-splitting="">
                  Unlocking the Power With Us
                </h3>
                <p className="mb-17">
                  SEO Audit Experts is more than just a company – it's a passion
                  project driven by a shared vision. Our story began when a
                  group of digital marketing enthusiasts realized the untapped
                  potential in helping businesses harness the power of SEO. We
                  set out to make a difference, and our journey has been nothing
                  short of incredible.
                </p>
                <p className="mb-26">
                  At SEO Audit Experts, we are passionate about your online
                  success. Our mission is to catapult your business to new
                  heights through the incredible potential of search engine
                  optimization. We understand that in today's digital age, a
                  strong online presence is the key to reaching your target
                  audience. That's where we come in.
                </p>
                <a href="about.html" className="action-btn">
                  <span>More About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
