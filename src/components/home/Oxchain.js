import React, { Fragment, useEffect } from 'react';
import '../../assets/css/home/Oxchain.scss';
import Download from '../include/Download';
import Nav from '../include/Nav';

import { Fade } from 'react-reveal';

import {Link} from 'react-router-dom';
import Resbtn from '../include/Resbtn';

const Oxchain = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
        return (
            <Fragment>
                <div className="oxchain_section_1">
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
                    <div className="row oxchain_link_tab">
                        <p className="oxchain_link_title">OX Chain</p>
                        <p className="oxchain_link_info1">Home &gt; <span className="oxchain_link_info2">OX Chain</span></p>
                    </div>
                    </div>
                </div>

                <div className="oxchain_section2">
                    <div className="container">
                        <div className="row oxchain_oxlabs_tab">
                            <div className="col-md-6">
                                <Fade left><img className="img-fluid" src="assets/img/oxchain/chain.png" alt="" /></Fade>
                            </div>
                            <Fade right>
                            <div className="col-md-6 oxchain_oxlabs_panel">
                                    <div className="oxchain_oxlabs_panel1">
                                        <p className="oxchain_oxlabs_panel1_text1">Decentralised</p>
                                        <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                            galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                        <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                            galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                    </div>
                            </div>
                            </Fade>
                        </div>
                        <div className="row oxchain_oxlabs_tab">
                            <Fade bottom>
                            <div className="col-md-6 oxchain_oxlabs_panel">
                                <div className="oxchain_oxlabs_panel1">
                                    <p className="oxchain_oxlabs_panel1_text1">Secure</p>
                                    <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                        galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                    <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                        galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                            </div>
                            </Fade>
                            <div className="col-md-6">
                                <Fade top><img className="img-fluid" src="assets/img/oxchain/privacy.png" alt="" /></Fade>
                            </div>
                        </div>
                        <div className="row oxchain_oxlabs_tab">
                            <div className="col-md-6">
                                <Fade left><img className="img-fluid" src="assets/img/oxchain/rising.png" alt="" /></Fade>
                            </div>
                            <div className="col-md-6 oxchain_oxlabs_panel">
                                <Fade right>
                                <div className="oxchain_oxlabs_panel1">
                                    <p className="oxchain_oxlabs_panel1_text1">Decentralised</p>
                                    <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                        galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                    <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                        galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="row oxchain_oxlabs_tab">
                        <div className="col-md-6 oxchain_oxlabs_panel">
                            <Fade bottom>
                                <div className="oxchain_oxlabs_panel1">
                                    <p className="oxchain_oxlabs_panel1_text1">Privacy Protected </p>
                                    <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                    <p className="oxchain_oxlabs_panel1_text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five 
                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                                </Fade>
                        </div>
                        <div className="col-md-6">
                            <Fade top><img className="img-fluid" src="assets/img/oxchain/protect.png" alt="" /></Fade>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="oxchain_download">
                    <div className="container">
                        <Fade right><Download /></Fade>
                    </div>
                </div>
            </Fragment>
        )
}

export default Oxchain;