import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const margin0 = {
    marginBottom: "0",
    marginRight: "10px",
  };

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);

  return (
    <>
      <section className="testimonials s2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                <div className="block-text center">
                  <h6 className="sub-heading">
                    <span>Pricing</span>
                  </h6>
                  <h3 className="heading">
                    Price Information and <br />
                    Details
                  </h3>
                </div>
                <div className="swiper testimonials-swiper s2">
                  <div className="swiper-wrapper" style={{ gap: "15px" }}>
                    {packages.map((p) => (
                      <div className="swiper-slide">
                        <div className="box-testimonial center">
                          <div className="image">
                            <img
                              src="https://themesflat.co/html/cyfoniihtml/assets/images/layouts/avt-08.png"
                              alt=""
                            />
                          </div>
                          <div className="info">
                            <h5 className="name">${p.price}usd</h5>
                            <p>{p.packageName}</p>
                            <img
                              src="https://themesflat.co/html/cyfoniihtml/assets/images/icon/quote-2.png"
                              alt=""
                            />
                          </div>
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureOne}</span>
                          </li>
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureTwo}</span>
                          </li>{" "}
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureThree}</span>
                          </li>{" "}
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureFour}</span>
                          </li>{" "}
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureFive}</span>
                          </li>{" "}
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureSix}</span>
                          </li>{" "}
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureSeven}</span>
                          </li>{" "}
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureEight}</span>
                          </li>{" "}
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureNine}</span>
                          </li>
                          <li className="text1">
                            <img
                              style={margin0}
                              src="https://i.ibb.co/HnrpzH6/icons8-tick-16.png"
                              alt="images"
                            ></img>
                            <span>{p.featureTen}</span>
                          </li>
                          <Link class="action-btn" to={`/package/${p._id}`}>
                            {" "}
                            <span>Buy Now</span>
                          </Link>
                        </div>
                      </div>
                    ))}
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

export default Pricing;
