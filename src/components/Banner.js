import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Swiper from "swiper";
import auth from "../firebase.init";

const Banner = () => {
  const [topBanners, setTopBanners] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/top-banner`)
      .then((res) => res.json())
      .then((info) => setTopBanners(info));
  }, []);
  useEffect(() => {
    new Swiper(".bannerSwiper", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next s1",
        prevEl: ".swiper-button-prev s1",
      },
    });
  }, []);

  const handleAddWebsite = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const website = event.target.website.value;
    const userMail = event.target.userMail.value;

    const websiteCheck = {
      email,
      website,
      userMail,
    };

    const url = `http://localhost:5000/add-website`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/report-sent ");
      });
  };

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
                  <span>Seo Analyzer</span>
                </h6>
                <h2 className="heading">
                  Optimizing your <br /> website{" "}
                  <span className="arlo_tm_animation_text_word" /> <br />
                </h2>
                <p className="mb-34">
                  Discover Proven Techniques to Elevate Your Website's
                  Visibility, Attract More Visitors, and Outrank Your
                  Competitors in Search Engine Results Pages
                </p>
                <form
                  onSubmit={handleAddWebsite}
                  class="form card-box"
                  style={{ width: "100%" }}
                >
                  <div class="container">
                    <div class="row justify-content-center align-items-baseline">
                      <div class="col-sm">
                        <div class="form-group mb-3">
                          <input
                            required
                            type="email"
                            class="form-control"
                            placeholder="Your Email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div class="col-sm">
                        <div class="form-group">
                          <input
                            required
                            type="text"
                            class="form-control"
                            placeholder="Your Website"
                            name="website"
                          />
                        </div>
                      </div>
                      <input
                        hidden
                        type="email"
                        class="form-control"
                        name="userMail"
                        value={user?.email}
                      />
                      <div class="col-sm">
                        <button type="submit" class="action-btn">
                          <span>Submit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="swiper bannerSwiper">
                <div className="swiper-wrapper" style={{ gap: "20px" }}>
                  <div className="swiper-slide">
                    <div className="card-box">
                      <div className="top d-flex">
                        <span className="icon-logo-01" />
                        <div>
                          <h6>Keyword Research</h6>
                        </div>
                      </div>
                      <div className="content">
                        <div className="image">
                          <img
                            src="https://img.freepik.com/free-vector/seo-concept-illustration_114360-5926.jpg"
                            alt=""
                          />
                        </div>
                        <div className="info d-flex">
                          <div>
                            <p>
                              Unlock Your SEO Potential: Elevate Your Website's
                              Visibility. Discover the Power of Keyword Research
                              and Target Keywords Audit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-box">
                      <div className="top d-flex">
                        <span className="icon-logo-01" />
                        <div>
                          <h6>Technical SEO Audit</h6>
                        </div>
                      </div>
                      <div className="content">
                        <div className="image">
                          <img
                            src="https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg?size=564&ext=jpg"
                            alt=""
                          />
                        </div>
                        <div className="info d-flex">
                          <div>
                            <p>
                              Elevate Your Website's Performance: Unleash the
                              Full Potential of Your Digital Presence with a
                              Technical SEO Audit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-box">
                      <div className="top d-flex">
                        <span className="icon-logo-01" />
                        <div>
                          <h6>On-Page SEO Audit</h6>
                        </div>
                      </div>
                      <div className="content">
                        <div className="image">
                          <img
                            src="https://img.freepik.com/free-vector/wall-post-concept-illustration_114360-1022.jpg?w=564"
                            alt=""
                          />
                        </div>
                        <div className="info d-flex">
                          <div>
                            <p>
                              Maximize Your Online Impact: Optimize Your
                              Website's Visibility and Rankings with an On-Page
                              SEO Audit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-box">
                      <div className="top d-flex">
                        <span className="icon-logo-01" />
                        <div>
                          <h6>Competitor Analysis</h6>
                        </div>
                      </div>
                      <div className="content">
                        <div className="image">
                          <img
                            src="https://img.freepik.com/free-vector/analysis-concept-illustration_114360-1119.jpg?w=564"
                            alt=""
                          />
                        </div>
                        <div className="info d-flex">
                          <div>
                            <p>
                              Gain the Competitive Edge: Uncover Market Insights
                              and Strategies with Competitor Analysis
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-box">
                      <div className="top d-flex">
                        <span className="icon-logo-01" />
                        <div>
                          <h6>Website Audit & Suggestions</h6>
                        </div>
                      </div>
                      <div className="content">
                        <div className="image">
                          <img
                            src="https://img.freepik.com/free-vector/seo-specialist-concept-idea-search-engine-optimization-website-as-marketing-strategy-web-page-promotion-internet-development-audit-vector-illustration-cartoon-style_613284-2877.jpg"
                            alt=""
                          />
                        </div>
                        <div className="info d-flex">
                          <div>
                            <p>
                            Optimize Your Online Presence: Unlock Opportunities and Enhance Performance with a Website Audit and Expert Suggestions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card-box">
                      <div className="top d-flex">
                        <span className="icon-logo-01" />
                        <div>
                          <h6>Full Link Profile Analysis</h6>
                        </div>
                      </div>
                      <div className="content">
                        <div className="image">
                        <img
                            src="https://img.freepik.com/free-vector/company-employees-use-web-search-find-ideas-doing-business-company_1150-43196.jpg?size=564&ext=jpg"
                            alt=""
                          />
                        </div>
                        <div className="info d-flex">
                          <div>
                            <p>
                              Master Your Backlink Strategy: Comprehensive
                              Insights through Full Link Profile Analysis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Banner;
