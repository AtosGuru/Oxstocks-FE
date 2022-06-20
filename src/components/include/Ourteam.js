import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ourteam = () => {
  const settings_team = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 603,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="dash_ox_team_box">
            <div className="row">
              <p className="dash_ox_team_title">Our Team</p>
            </div>
            <div className="row dash_ox_team_slider">
              <Slider {...settings_team}>
                <div>
                  <img
                    className="crypto_partner_img "
                    src="assets/img/aboutus/Dimitrios.jpg"
                    width="225px"
                    height="225px"
                    alt=""
                  />
                  <p className="aboutus_feature_item_text1">
                    Dimitrios (Founder)
                  </p>
                </div>
                <div>
                  <img
                    className="crypto_partner_img "
                    src="assets/img/aboutus/Daniel.jpeg"
                    alt=""
                    width="225px"
                    height="225px"
                  />
                  <p className="aboutus_feature_item_text1">Daniel (Labs)</p>
                </div>
                <div>
                  <img
                    className="crypto_partner_img "
                    src="assets/img/aboutus/Michael.jpg"
                    alt=""
                    width="225px"
                    height="225px"
                  />
                  <p className="aboutus_feature_item_text1">Michael (Sales)</p>
                </div>
                <div>
                  <img
                    className="crypto_partner_img "
                    src="assets/img/aboutus/Yurii.jpg"
                    alt=""
                    width="225px"
                    height="225px"
                  />
                  <p className="aboutus_feature_item_text1">
                    Yurii D (Frontend)
                  </p>
                </div>
                <div>
                  <img
                    className="crypto_partner_img "
                    src="assets/img/aboutus/avatar.png"
                    alt=""
                    width="225px"
                    height="225px"
                  />
                  <p className="aboutus_feature_item_text1">
                    Danil (Blockchain)
                  </p>
                </div>
                <div>
                  <img
                    className="crypto_partner_img "
                    src="assets/img/aboutus/avatar.png"
                    alt=""
                    width="225px"
                    height="225px"
                  />
                  <p className="aboutus_feature_item_text1">James (Engineer)</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Ourteam;
