import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturesPage = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/features`)
      .then((res) => res.json())
      .then((info) => setFeature(info));
  }, [id]);

  return (
    <div className="card-box__features_card">
      <section
        className="about payment-setting card-box__features"
        data-aos="fade-up"
        data-aos-duration={2000}
      >
        <div className="shape" />

        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {feature.map((e) => (
                  <div className="block-text center">
                    <h6 className="sub-heading">
                      <span>{e.topText}</span>
                    </h6>
                    <h3 className="heading wow" data-splitting="">
                      {e.title}
                      <br />
                    </h3>
                    <p className="">{e.subText}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {feature.map((e) => (
            <>
              <div className="row  justify-content-center">
                <div className="col-xl-6 col-md-12">
                  <div className="about__right">
                    <div className="images">
                      <img className="img1" src={e.featureImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-12">
                  <div className="block-text">
                    <h3 className="heading wow" data-splitting="">
                      {e.featureTitle}
                    </h3>
                    <p className="mb-17">
                      {e.featureDesc
                        .split(". ")
                        .map((sentence, sentenceIndex, sentencesArray) => (
                          <React.Fragment key={sentenceIndex}>
                            {sentenceIndex > 0 && sentenceIndex % 2 === 0 && (
                              <br />
                            )}{" "}
                            <p>{sentence}</p>
                          </React.Fragment>
                        ))}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
