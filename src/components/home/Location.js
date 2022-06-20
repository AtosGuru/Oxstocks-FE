import React , { Fragment, useEffect } from 'react';
import '../../assets/css/home/Location.scss';
import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import { Fade } from 'react-reveal';
import Download from '../include/Download';
import Resbtn from '../include/Resbtn';

const Location = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
    return (
        <Fragment>
            <div className="location_section_1">
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
                    <p className="aboutus_link_title">Office Location</p>
                    <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Office Location</span></p>
                </div>
                </div>
            </div>
            
            <div className="location_section_2">
                <div className="container">
                    <div className='row'>
                        <Fade left>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/china.png" alt="" />
                                <p className="text1">China</p>
                                {/* <p className="text2"><Email className="" /> info@gmail.com</p> */}
                            </div>
                        </div>
                        </Fade>
                        <Fade top>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/sydney.png" alt=""  />
                                <p className="text1">Sydney</p>
                                {/* <p className="text2"><Email className="" /> info@gmail.com</p> */}
                            </div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/athens.png" alt=""  />
                                <p className="text1">Athens</p>
                                {/* <p className="text2"><Email className="" /> info@gmail.com</p> */}
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/london.png"  alt="" />
                                <p className="text1">London</p>
                                {/* <p className="text2"><Email className="" /> info@gmail.com</p> */}
                            </div>
                        </div>
                        </Fade>
                        <Fade top>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="location_box">
                                <img className="img-fluid" src="assets/img/location/india.png" alt=""  />
                                <p className="text1">India</p>
                                {/* <p className="text2"><Email className="" /> info@gmail.com</p> */}
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>

                <div className="container">
                    <Fade bottom><Download /></Fade>
                </div>
            </div>
        </Fragment>
    )
}

export default Location;