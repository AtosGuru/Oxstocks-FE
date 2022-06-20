import React, { Fragment, useEffect } from 'react';
import '../../assets/css/home/Oxlabs.scss';
import Download from '../include/Download';
import Nav from '../include/Nav';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import Resbtn from '../include/Resbtn';

const Oxlabs = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
        return (
            <Fragment>
                <div className="oxlabs_section_1">
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
                    <div className="row oxlabs_link_tab">
                        <p className="oxlabs_link_title">OX Labs</p>
                        <p className="oxlabs_link_info1">Home &gt; <span className="oxlabs_link_info2">OX Labs</span></p>
                    </div>
                    </div>
                </div>

                <div className="oxlabs_section2">
                    <div className="container">
                        <div className="row oxlabs_oxlabs_tab">
                            <div className="col-md-6">
                                <Fade left><img className="img-fluid" src="assets/img/oxlabs/feature-img-1.png" alt=""/></Fade>
                            </div>
                            <div className="col-md-6 oxlabs_oxlabs_panel">
                                    <Fade top>
                                    <div className="oxlabs_oxlabs_panel1">
                                        <p className="oxlabs_oxlabs_panel1_text1">We're Our Developers Live, Create & Explore</p>
                                        <p className="oxlabs_oxlabs_panel1_text2">OX Labs is an integral part of our business and OX STOCKS project. Our team is working countlessly around the clock to ensure product quality for the future</p>
                                    </div>
                                    </Fade>
                                    <Fade right>
                                    <div className="oxlabs_oxlabs_panel2">
                                        <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-1.png" alt=""/></div>
                                        <div>
                                            <p className="oxlabs_oxlabs_panel2_text1">New Tokens</p>
                                            <p className="oxlabs_oxlabs_panel2_text2">We're constantly brainstorming new ideas and forks for OX coin on a daily basis</p>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade bottom>
                                    <div className="oxlabs_oxlabs_panel2">
                                        <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-2.png" alt=""/></div>
                                        <div>
                                            <p className="oxlabs_oxlabs_panel2_text1">OX Coin Upgrades</p>
                                            <p className="oxlabs_oxlabs_panel2_text2">Constant improvements to our current infrastructure and OX Coin project</p>
                                        </div>
                                    </div>
                                    </Fade>
                            </div>
                        </div>
                        <div className="row oxlabs_oxlabs_tab">
                            <div className="col-md-6 oxlabs_oxlabs_panel">
                                <Fade left>
                                <div className="oxlabs_oxlabs_panel1">
                                    <p className="oxlabs_oxlabs_panel1_text1">Positively Contributing to the future of Payments</p>
                                    <p className="oxlabs_oxlabs_panel1_text2">OX Coin is a premium utility currency which supports the entire OX STOCKS platform. We aim to integrate OX Coin into our everyday payment methods</p>
                                </div>
                                </Fade>
                                <Fade bottom>
                                <div className="oxlabs_oxlabs_panel2">
                                    <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-3.png" alt=""/></div>
                                    <div>
                                        <p className="oxlabs_oxlabs_panel2_text1">Ox Pay(Coming Soon)</p>
                                        <p className="oxlabs_oxlabs_panel2_text2">By integrating your OX Wallet, you'll be able to pay for everyday items with OX Coin</p>
                                    </div>
                                </div>
                                </Fade>
                                <Fade top>
                                <div className="oxlabs_oxlabs_panel2">
                                    <div className="oxlabs_oxlabs_panel2_img"><img className="img-fluid" src="assets/img/oxlabs/licon-4.png" alt=""/></div>
                                    <div>
                                        <p className="oxlabs_oxlabs_panel2_text1">OX Merchant(Coming Soon)</p>
                                        <p className="oxlabs_oxlabs_panel2_text2">Accept OX Coin as a method of payment for your business</p>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            <div className="col-md-6">
                                <Fade right><img className="img-fluid" src="assets/img/oxlabs/feature-img-2.png" alt="" /></Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="oxlabs_section3">
                    <div className="container">
                        <div className="offset-xl-3 col-xl-6 offset-md-2 col-md-8 oxlabs_contact_form">
                            <Fade top>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="oxlabs_contact_form_text">Ready to Share Your Idea?</p>
                                </div>
                            </div>
                            <div className="row oxlabs_msg_input_box">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="firstname" placeholder="First Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="lastname" placeholder="Last Name" />
                            </div>
                            </div>
                            <div className="row oxlabs_msg_input_box">
                                <div className="col-md-12">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row oxlabs_msg_input_box">
                                <div className="col-md-12">
                                    <textarea className="form-control" placeholder="Idea" id="idea" style={{height: '200px'}}></textarea>
                                </div>
                            </div>
                            <div className="oxlabs_submit_form"><button type="button" className="oxlabs_submit_btn">Submit</button></div>
                            </Fade>
                            <Fade top><img className="img-fluid" id="person1" src="assets/img/oxlabs/Ellipse31.png" alt="" /></Fade>
                            <Fade left><img className="img-fluid" id="person2" src="assets/img/oxlabs/Ellipse32.png" alt="" /></Fade>
                            <Fade bottom><img className="img-fluid" id="person3" src="assets/img/oxlabs/Ellipse33.png" alt="" /></Fade>
                            <Fade top><img className="img-fluid" id="person4" src="assets/img/oxlabs/Ellipse34.png" alt="" /></Fade>
                            <Fade right><img className="img-fluid" id="person5" src="assets/img/oxlabs/Ellipse35.png" alt="" /></Fade>
                            <Fade bottom><img className="img-fluid" id="person6" src="assets/img/oxlabs/Ellipse36.png" alt="" /></Fade>
                        </div>
                    </div>
                </div>
                <div className="oxlab_download">
                    <div className="container">
                        <Fade bottom><Download /></Fade>
                    </div>
                </div>
            </Fragment>
        )
}

export default Oxlabs;