import React, { Fragment, useEffect } from 'react';
import '../../assets/css/home/Aboutus.scss';
import Nav from '../include/Nav';
import Download from '../include/Download';
import { Link } from 'react-router-dom';

import { Fade }  from "react-reveal";
import Ourteam from '../include/Ourteam';
import Resbtn from '../include/Resbtn';


const Aboutus = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
        return (
            <Fragment>
                <div className="aboutus_section_1">
                    <div className="container">
                        <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "20%", left: "0" }} /></Link>
                            <Nav />
                        </div>
                        <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                            {/* <Link to="" className="nav-link navbar_rightbox" href="#" >
                            &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                                
                            </Link> */}
                            <Resbtn />
                        </div>
                    <div className="row aboutus_link_tab">
                        <p className="aboutus_link_title">About Us</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">About Us</span></p>
                    </div>
                    </div>
                </div>

                <div className="aboutus_section2">
                    <div className="container">
                        <div className="row aboutus_oxstocks_tab">
                            <Fade left>
                                <div className="col-xl-6 col-md-6">
                                    <div className="aboutus_img_box"><img className="img-fluid aboutus_img" src="assets/img/aboutus/about-us.png"  alt=""/></div>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-xl-6 col-md-6 aboutus_oxstocks_panel">
                                        <div className="aboutus_oxstocks_panel1">
                                            <p className="aboutus_oxstocks_panel1_text1">OX STOCKS</p>
                                            <p className="aboutus_oxstocks_panel1_text2">We are a Sydney based company founded in 2020 by Dimitrios Kappatos. What started as a simple money and market news platform has quickly evolved into a crypto exchange platform. We firmly believe in educating our youth in currency literacy, freedom of finance and having the resources to impact our future.</p>
                                        </div>
                                        <div className="aboutus_oxstocks_panel1">
                                            <p className="aboutus_oxstocks_panel1_text1">Our Goals</p>
                                            <p className="aboutus_oxstocks_panel1_text2">Our aim is to be the largest decentralised exchange in Australia. With significant financial growth our target is to be an ASX publicly listed company by 2025. We currently have global offices and more than 100 employee’s working remotely across the globe.</p>
                                        </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="row aboutus_oxstocks_tab">
                            <Fade bottom>
                            <div className="col-xl-6 col-md-6 aboutus_oxstocks_panel">
                                <div className="aboutus_oxstocks_panel1">
                                    <p className="aboutus_oxstocks_panel1_text1">Our Brand</p>
                                    <p className="aboutus_oxstocks_panel1_text2">Our logo is made up of orange (creativity and enthusiasm) + grey (neutrality and balance). The horns symbolise the ‘bull’ in a bull market</p>
                                </div>
                                <div className="aboutus_oxstocks_panel1">
                                    <p className="aboutus_oxstocks_panel1_text1">OX Coin</p>
                                    <p className="aboutus_oxstocks_panel1_text2">The premium currency on our platform, OX Coin will provide tremendous benefits to society ensuring secure data ownership in a decentralised way to connect the world without intermediates benefiting the end users of all types of communications.</p>
                                </div>
                            </div>
                            </Fade>
                            <Fade top>
                                <div className="col-xl-6 col-md-6">
                                    <img className="img-fluid" src="assets/img/aboutus/trading.png"  alt=""/>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="aboutus_section3">
                    <div className="container">
                        <Fade right><Ourteam /></Fade>
                    </div>
                    <Fade left>
                    <div className="container">
                        <div className="aboutus_feature_box">
                            <span className="aboutus_feature_text1">OX STOCKS PTY LTD </span>
                            {/* <span className="aboutus_feature_text2">LEADING CRYPTOCURRENCY EXCHANGE SINCE DAY ONE OF BITCOIN DISTRIBUTION</span> */}
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-sm-12 aboutus_feature_item">
                                <div className="aboutus_feature_image"><img className="img-fluid" src="assets/img/aboutus/chain.png" width="200px" height="200px"  alt=""/></div>
                                <p className="aboutus_feature_item_text1">OX CHAIN</p>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 aboutus_feature_item">
                                <div className="aboutus_feature_image"><img className="img-fluid" src="assets/img/aboutus/exchange.png" width="200px" height="200px"  alt=""/></div>
                                <p className="aboutus_feature_item_text1">OX EXCHANGE</p>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 aboutus_feature_item">
                                <div className="aboutus_feature_image"><img className="img-fluid" src="assets/img/aboutus/labs.png" width="200px" height="200px"  alt=""/></div>
                                <p className="aboutus_feature_item_text1">OX LABS</p>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12 aboutus_feature_item">
                                <div className="aboutus_feature_image"><img className="img-fluid" src="assets/img/aboutus/wallet.png" width="200px" height="200px"  alt=""/></div>
                                <p className="aboutus_feature_item_text1">OX WALLET</p>
                            </div>
                        </div>
                        <Fade left>
                        <Download />
                        </Fade>
                        {/* <Fade right>
                        <Partner />
                        </Fade> */}
                        
                    </div>
                    </Fade>
                </div>
            </Fragment>
        )
}

export default Aboutus;