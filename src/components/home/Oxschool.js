import React, { Fragment, useEffect } from 'react';
import '../../assets/css/home/Oxschool.scss';
import Download from '../include/Download';
import Nav from '../include/Nav';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import Resbtn from '../include/Resbtn';

const Oxschool = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
        return (
            <Fragment>
                <div className="oxschools_section_1">
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
                    <div className="row oxschools_header_box">
                        <Fade left>
                        <div className="col-xl-7 col-md-6 col-sm-12 oxschools_header_left_box">
                                <p className="oxschools_header_left_box_text1">Getting Started in Crypto Currency</p>
                                <p className="oxschools_header_left_box_text2">Learn and understand what crypto currency is and how its being introduced to the world</p>
                                <p className="oxschools_header_left_box_text3">
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/iconawesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/iconawesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/iconawesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/iconawesome-star.png" alt=""/>
                                    <img className="oxschools_star_margin" src="assets/img/oxschool/iconawesome-star.png" alt=""/> (10,271 ratings)  <span className="oxschools_star_text"> 117,455 students</span></p>
                                <p className="oxschools_header_left_box_text2">Taught by</p>
                                <div className="oxschools_creater_panel">
                                    <div className="oxschools_creater_img"><img src="assets/img/oxschool/Ellipse37.png" alt="" /></div>
                                    <div>
                                        <p className="oxschools_creater_name">Chris Haroun</p>
                                        <p className="oxschools_creater_date">Last updated 7/2021</p>
                                    </div>
                                </div>
                        </div>
                        </Fade>
                        <Fade top>
                        <div className="col-xl-5 col-md-6 col-sm-12 oxschools_intro_video">
                            <div className="oxschools_intro_video_img">
                            <img className="img-fluid" src="assets/img/oxschool/video-ilstation.png" alt="" />
                            <div className="oxschools_play_panel">
                                <img className="img-fluid" src="assets/img/oxschool/Iconawesome-play-circle.png" alt="" />
                                <p className="oxschools_watch_intro_text">Watch intro Video</p>
                            </div>
                            </div>
                            <div className="oxschools_price_panel">
                            <div className="oxschools_price_panel1">
                                {/* <p className="oxschools_price_100">$500</p> */}
                                {/* <p className="oxschools_price_300"><del>$300</del></p> */}
                            </div>
                            {/* <p className="oxschools_price_hours">12 hours left at this price!</p> */}
                            <div className="oxschools_submit_form"><button type="button" className="oxschools_submit_btn">Buy Now</button></div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    </div>
                </div>

                <div className="oxschools_section2">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-6 oxschools_learn_panel">
                        <Fade bottom>
                        <p className="oxschools_learn_text">What you'll learn</p>
                        <div className="row">
                            <div className="col-xl-6 col-md-12">
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Iconawesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">Introducing crypto currency, how it started and how it works</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Iconawesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">Learn how Crypto Currency is impacting the world and what to look out for in the future</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Iconawesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">What is blockchain & how can I benefit from it</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Iconawesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">How OX STOCKS is contributing to the digital financial revolution</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Iconawesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">Different kind of crypto currency and projects that exist</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <hr className="oxschools_check_hr" />
                                <div className="oxschools_check_panel">
                                    <img className="img-fluid oxschools_check_img" src="assets/img/oxschool/Iconawesome-check-double.png" alt="" />
                                    <p className="oxschools_check_text">Helping you make smart crypto currency investment decisions</p>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        
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
                                    <p className="oxlabs_contact_form_text">Any questions, Get in touch</p>
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
                
                <div className="oxschools_section4">
                    <div className="container">
                        <Fade top><Download /></Fade>
                    </div>
                </div>
            </Fragment>
        )
}

export default Oxschool;