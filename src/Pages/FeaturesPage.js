import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturesPage = () => {
  const { id } = useParams();

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about/${id}`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, [id]);

  return (
    <div className="card-box__features_card">
      <section className="about payment-setting card-box__features" data-aos="fade-up" data-aos-duration={2000}>
        <div className="shape" />
        <div className="container">
            
          {about.map((AboutData) => (
            <div className="row rev justify-content-center">
              <div className="col-xl-6 col-md-12">
                <div className="about__right">
                  <div className="images">
                    <img className="img1" src={AboutData.img} alt="" />
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="block-text">
                  <h6 className="sub-heading">
                    <span>About us</span>
                  </h6>
                  <h3 className="heading wow" data-splitting="">
                    {AboutData.title}
                  </h3>
                  <p className="mb-17">
                    {about.map((AboutData, index) => (
                      <div key={index}>
                        {AboutData.subText
                          .split(". ")
                          .map((sentence, sentenceIndex, sentencesArray) => (
                            <React.Fragment key={sentenceIndex}>
                              {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                                <br />
                              )}{" "}
                              <p>{sentence}</p>
                            </React.Fragment>
                          ))}
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
