import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials s2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                <div className="block-text center">
                  <h6 className="sub-heading">
                    <span>Testimonials</span>
                  </h6>
                  <h3 className="heading">
                    What People Say <br />
                    about us
                  </h3>
                </div>
                <div className="swiper testimonials-swiper s2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="box-testimonial center">
                        <div className="image">
                          <img src="https://themesflat.co/html/cyfoniihtml/assets/images/layouts/avt-08.png" alt="" />
                        </div>
                        <div className="info">
                          <h5 className="name">Annette Black</h5>
                          <p>Founder &amp; CEO</p>
                          <img src="https://themesflat.co/html/cyfoniihtml/assets/images/icon/quote-2.png" alt="" />
                        </div>
                        <p className="text">
                          “ Praesent felis justo, porta id tortor vel, auctor
                          aliquet ligula. Nam blandit mi vel pulvinar convallis.
                          Nam at ligula a erat laoreet tincidunt ac ut lorem. “
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-testimonial center">
                        <div className="image">
                          <img src="https://themesflat.co/html/cyfoniihtml/assets/images/layouts/avt-09.png" alt="" />
                        </div>
                        <div className="info">
                          <h5 className="name">Leslie Alexander</h5>
                          <p>CEO &amp; Founder at ThemeMu</p>
                          <img src="https://themesflat.co/html/cyfoniihtml/assets/images/icon/quote-2.png" alt="" />
                        </div>
                        <p className="text">
                          “ Curabitur eu est feugiat quam feugiat tristique non
                          vel erat. Class aptent taciti sociosqu ad litora
                          torquent per conubia nostra, per inceptos himenaeos.
                          Nunc nec suscipit fringilla, augue ligula eleifend
                          velit. “
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-testimonial center">
                        <div className="image">
                          <img src="https://themesflat.co/html/cyfoniihtml/assets/images/layouts/avt-10.png" alt="" />
                        </div>
                        <div className="info">
                          <h5 className="name">Esther Howard</h5>
                          <p>Chief Product Officer</p>
                          <img src="https://themesflat.co/html/cyfoniihtml/assets/images/icon/quote-2.png" alt="" />
                        </div>
                        <p className="text">
                          “ Etiam dignissim ex vitae tortor viverra, varius
                          tincidunt sem vestibulum. Donec ex ante, sollicitudin
                          sit amet posuere venenatis, consectetur facilisis nisi
                          malesuada nisi nec ex. “
                        </p>
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

export default Testimonials;
