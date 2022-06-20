import React , { Fragment } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Partner = () => {
        const settings_partner = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,

            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 766,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 603,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
              ]
          };
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <div className="dash_ox_partners_box">
                            <div className="row">
                                <p className="dash_ox_partners_title">OX Partners</p>
                            </div>
                            <div className="row dash_ox_partners_slider">
                                <Slider {...settings_partner}>
                                    <div>
                                        <img className="crypto_partner_img img-fluid" src="assets/img/index/partner-1.png"  alt=""/>
                                    </div>
                                    <div>
                                        <img className="crypto_partner_img img-fluid" src="assets/img/index/partner-2.png"  alt=""/>
                                    </div>
                                    <div>
                                        <img className="crypto_partner_img img-fluid" src="assets/img/index/partner-3.png"  alt=""/>
                                    </div>
                                    <div>
                                        <img className="crypto_partner_img img-fluid" src="assets/img/index/partner-4.png"  alt=""/>
                                    </div>
                                    <div>
                                        <img className="crypto_partner_img img-fluid" src="assets/img/index/partner-4.png"  alt=""/>
                                    </div>
                                    <div>
                                        <img className="crypto_partner_img img-fluid" src="assets/img/index/partner-4.png"  alt=""/>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

export default Partner;