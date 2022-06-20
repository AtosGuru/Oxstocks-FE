import React, { Fragment, useEffect } from 'react';
import '../../../assets/css/home/marketplace/Marketplace_category.scss';
import { Link } from 'react-router-dom';
import Nav from '../../include/Nav';
import Download from '../../include/Download';
import { Fade } from 'react-reveal';
import Resbtn from '../../include/Resbtn';

const Marketplace_category = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
    return (
        <Fragment>
             <div className="marketplaceCategory_section_1">
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
                </div>
            </div>
            
            <div className="marketplaceCategory_section_2">
                <div className="container">
                    <div className="row">
                        <Fade left>
                        <div className="col-xl-3 col-md-3 col-sm-12">
                            <div className="category_box">
                                <p>Categories</p>
                                <div className="checkout">
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> NFT </span></p>
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> Domains </span></p>
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> Tech </span></p>
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> Apparel </span></p>
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> Misc </span></p>
                                </div>
                            </div>
                            <div className="category_box">
                                <p>Categories</p>
                                <div className="checkout">
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> Buy Now </span></p>
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> Action </span></p>
                                    <p className="box"><input type="checkbox" className="category_icon" /><span className="category_text"> Sold </span></p>
                                </div>
                            </div>
                        </div>
                        </Fade>
                        <div className="col-xl-9 col-md-9 col-sm-12">
                            <div className="row">
                                <Fade left>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/blueNFT.png" alt=""/>
                                        <p className="title1">Electric OX</p>
                                        <p className="title2">300 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade top>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/grayNFT.png" alt=""/>
                                        <p className="title1">Aqua OX</p>
                                        <p className="title2">100 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade right>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/yellowNFT.png" alt=""/>
                                        <p className="title1">Champagne OX</p>
                                        <p className="title2">500 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade left>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/blueNFT.png" alt=""/>
                                        <p className="title1">RB OX</p>
                                        <p className="title2">100 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade top>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/grayNFT.png" alt=""/>
                                        <p className="title1">Electric OX</p>
                                        <p className="title2">300 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade right>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/yellowNFT.png" alt=""/>
                                        <p className="title1">Aqua OX</p>
                                        <p className="title2">100 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade left>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/blueNFT.png" alt=""/>
                                        <p className="title1">Electric OX</p>
                                        <p className="title2">300 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade top>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/grayNFT.png" alt=""/>
                                        <p className="title1">Aqua OX</p>
                                        <p className="title2">100 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade right>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/yellowNFT.png" alt=""/>
                                        <p className="title1">Champagne OX</p>
                                        <p className="title2">500 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade left>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/blueNFT.png" alt=""/>
                                        <p className="title1">RB OX</p>
                                        <p className="title2">100 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade top>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/grayNFT.png" alt=""/>
                                        <p className="title1">Electric OX</p>
                                        <p className="title2">300 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                                <Fade right>
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <div className="category_img_box">
                                        <img className="img-fluid" src="assets/img/market/yellowNFT.png" alt=""/>
                                        <p className="title1">Aqua OX</p>
                                        <p className="title2">100 OX</p>
                                        <button className="category_btn">Buy Now</button>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            <div className="row" style={{textAlign: "center",paddingTop: '5%'}}>
                                <div><button className="explore_btn">Explore</button></div>
                            </div>
                        </div>
                    </div>

                    <Fade top><Download /></Fade>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Marketplace_category;