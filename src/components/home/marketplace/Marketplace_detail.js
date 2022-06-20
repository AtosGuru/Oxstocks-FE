import React , { Fragment, useEffect } from 'react';
import "../../../assets/css/home/marketplace/MarketplaceDetail.scss";
import { Link } from 'react-router-dom';
import Nav from '../../include/Nav';
import Resbtn from '../../include/Resbtn';
import Download from '../../include/Download';
import { Fade } from 'react-reveal';

const MarketplaceDetail = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
    return (
        <Fragment>
            <div className="marketDetail_section_1">
                <div className="container">
                        <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" style={{ position: "absolute", top: "20%", left: "0" }}  alt="" /></Link>
                            <Nav />
                        </div>
                        <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                            {/* <Link to="" className="nav-link navbar_rightbox" href="#" >
                            &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                                
                            </Link> */}
                            <Resbtn />
                        </div>
                </div>
            </div>
            <div className="marketDetail_section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <Fade top>
                            <div className="marketDetail_box_left">
                                <img className="img-fluid" src="assets/img/market/iconox.png" width="30%" height="30%"  alt="" />
                                <p className="title1">nipify.com</p>
                                <p className="title2">www.oxstocks.com</p>
                            </div>
                            </Fade>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 marketDetail_box_right">
                            <Fade bottom>
                            <div className="padding">
                                <p className="title">nipify.com</p>
                                <div className="panel">
                                    <img className="img-fluid" src="assets/img/market/iconox.png" width="15%" height="15%" alt="" />
                                    <p>1154 OX</p>
                                </div>
                                <button type="button" className="market_buy_btn">Buy Now</button>
                                <p className="coming">Coming Soon</p>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Fade left><Download /></Fade>
                </div>
            </div>
        </Fragment>
    )
}

export default MarketplaceDetail;