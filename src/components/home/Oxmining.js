import React , { Fragment, useEffect } from 'react';
import '../../assets/css/home/Oxmining.scss';
import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import Download from '../include/Download';
import Resbtn from '../include/Resbtn';

const Oxmining = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
    return (
        <Fragment>
            <div className="oxmining_section_1">
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
                    
                    <div className="row header_section">
                        <div className="col-xl-6">
                            <p className="title1">Introducing Ox Mining</p>
                            <p className="title2">OX Coin is built on the DEFI blockchain network. OX Coin 
                                will provide tremendous benefits to society ensuring 
                                secure data ownership in a decentralised way to connect 
                                the world without intermediates benefiting the end users 
                                of all types of communications.
                            </p>
                        </div>
                        <div className="col-xl-6">
                            <div><img className="img-fluid" src="assets/img/oxmining/computer.png"  alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxmining_section_2">
                <div className="container">
                    <p className="steps_title">3 Easy Steps to Start Mining</p>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="step_box">
                                <div className="box_img"><img className="img-fluid" src="assets/img/oxmining/mining_step1.png"  alt="" /></div>
                                <p className="box_title1">Sign Up</p>
                                <p className="box_title2">A few quick and easy steps and your account ready to go!</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="step_box">
                                <div className="box_img"><img className="img-fluid" src="assets/img/oxmining/mining_step2.png"  alt="" /></div>
                                <p className="box_title1">Start Mining</p>
                                <p className="box_title2">Start mining in less the 2 minutes and earn money with your system once you have downloaded the mining software</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="step_box">
                                <div className="box_img"><img className="img-fluid" src="assets/img/oxmining/mining_step3.png"  alt="" /></div>
                                <p className="box_title1">Start Earning</p>
                                <p className="box_title2">Simple payment into any crypto at your choice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxmining_section_3">
                <div className="container">
                    <p className="title">How does Ox Mining work for you?</p>
                    <div className="image_box"><img className="img-fluid" src="assets/img/oxmining/mining.png"  alt="" /></div>
                </div>
            </div>

            <div className="oxmining_section_4">
                <div className="container box">
                    <p className="title_intro">Introducing Ox Mining</p>
                    <div className="row s_box_container">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="s_box">
                                <p className="title1">24/7 Expert Support</p>
                                <p className="title2">Our Experts are always ready to help solve any questions at any time of the day</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="s_box">
                                <p className="title1">24/7 Expert Support</p>
                                <p className="title2">Our Experts are always ready to help solve any questions at any time of the day</p>
                            </div>
                        </div>
                    </div>
                    <div className="row s_box_container">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="s_box">
                                <p className="title1">Ox Wallet</p>
                                <p className="title2">Live wallet balance to show you're earning while mining</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="s_box">
                                <p className="title1">Ox Wallet</p>
                                <p className="title2">Live wallet balance to show you're earning while mining</p>
                            </div>
                        </div>
                    </div>
                    <div className="row s_box_container">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="s_box">
                                <p className="title1">Secure Mining Service</p>
                                <p className="title2">With Round the clock support we provide secure mining services</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="s_box">
                                <p className="title1">Secure Mining Service</p>
                                <p className="title2">With Round the clock support we provide secure mining services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxmining_section_5">
                <div className="container">
                    <p className="title">Mining Income Calculator</p>
                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="box">
                                <p className="top_title">Currency</p>
                                <div>
                                    <select className="form-control" >
                                        <option>🇬🇧 GBP - £</option>
                                    </select>
                                </div>

                                <p className="top_title">El. costs</p>
                                <div className="pos_box">
                                    <input className="form-control" placeholder="El. costs" />
                                    <p className="top_title">USD/kWH</p>
                                </div>

                                <p className="top_title">Device</p>
                                <div>
                                    <select className="form-control" >
                                        <option>BITMAIN AntMiner S17e (64Th)</option>
                                    </select>
                                </div>

                                <p className="top_title">Number of devices</p>

                                <label className="plus_symbol">+</label>
                                <label className="plus_text">1</label>
                                <label className="plus_symbol">-</label>

                                <p className="margin-top-btn">
                                    <button className="btn btn-warning">Calculate</button>
                                    <label className="clear_text">clear all</label>
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="income_box">
                                <p className="income_num">0</p>
                                <p className="income_text">DAILY INCOME</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="income_box">
                                <p className="income_num">0</p>
                                <p className="income_text">MONTHLY INCOME</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="income_box">
                                <p className="income_num">0</p>
                                <p className="income_text">ANNUAL INCOME</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxmining_section_6">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 ">
                            <div className="box">
                                <p className="title1">Mining Income Result Source</p>
                                <p className="title2">AMD CPU EPYC 7302</p>
                                <p className="title2">Your approx.income with Ox Mining</p>

                                <label className="title3">0.84 USD <label className="title3_left">/&nbsp;Day</label></label> 

                                <button className="btn btn-warning mining_btn">START MINING WITH OX MINING</button>

                                <p className="title4">
                                *Please note that values are only estimates based on past performance - real 
                                    values can be lower or higher. Exchange rate of 1 BTC = 42100.70 USD 
                                    was used.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxmining_section_7">
                <div className="container">
                    <Download />
                </div>
            </div>
        </Fragment>
    )
}

export default Oxmining;