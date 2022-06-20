import React , { Fragment, useEffect } from 'react';
import '../../assets/css/home/Oxcoin.scss';
import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import Download from '../include/Download';
import Resbtn from '../include/Resbtn';

const Oxcoin = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
    return (
        <Fragment>
            <div className="oxcoin_section_1">
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
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <p className="title2">Sophisticated Infrastructure for Investors, Traders & Enthusiasts</p>
                            <p className="title1">Introducing OXCoin by OX Stocks</p>
                            <p className="title2">OX Coin is built on the DEFI blockchain network. OX Coin will provide 
                                tremendous benefits to society ensuring secure data ownership in a 
                                decentralised way to connect the world without intermediates benefiting 
                                the end users of all types of communications.
                            </p>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div><img className="img-fluid" src="assets/img/oxcoin/oxcoin.png"  alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxcoin_section_2">
                <div className="container">
                    <p className="title1">Currency</p>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="box">
                                <div><img className="img-fluid" src="assets/img/oxcoin/Buy-Ox.png" alt=""/></div>
                                <p className="title2">Buy Ox anywhere in the world</p>
                                <p className="title3">A few quick and easy steps and your account ready to go!</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="box" style={{ backgroundColor: '#F79118' }}>
                                <div><img className="img-fluid" src="assets/img/oxcoin/User-Ox.png" alt=""/></div>
                                <p className="title2">Stay Connected with Ox Coin holders</p>
                                <p className="title3">Join our private owners Discord to stay in touch with all Ox related news</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="box">
                                <div><img className="img-fluid" src="assets/img/oxcoin/Spend-Ox.png" alt=""/></div>
                                <p className="title2">Spend Ox Coin in our store</p>
                                <p className="title3">Purchase digital assets with Ox Coin in our Ox Marketplace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxcoin_section_3">
                <div className="container">
                    <p className="title1">Ox Wallet</p>
                    <p className="title2">Securely store Ox Coin in your Ox Wallet.</p>
                    <p className="title2">Use Ox Coin in our online Ox Marketplace</p>
                    <div className="row box_contain1">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <img className="img-fluid" src="assets/img/oxcoin/ox_spread.png" width="80%" height="80%" alt="" />
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 box_contain2">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="box">
                                        <div><img className="img-fluid" src="assets/img/oxcoin/Ox-Wallet.png"  alt="" /></div>
                                        <p className="box_title">Download Ox Wallet & Register</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="box">
                                        <div><img className="img-fluid" src="assets/img/oxcoin/Buy--hold-&-send-Ox-Coin.png"  alt="" /></div>
                                        <p className="box_title">Buy, hold & send Ox Coin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="box">
                                        <div><img className="img-fluid" src="assets/img/oxcoin/Purchase-Digital-Assets-on-our-Ox-Marketplace.png"  alt="" /></div>
                                        <p className="box_title">Purchase Digital Assets on our Ox Marketplace</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxcoin_section_4">
                <div className="container">
                    <p className="title1">Access Ox Discord</p>
                    <p className="title2">
                        By holding Ox Coin, you’ll have access to our private Ox Discord. Stay up to date with all the latest news and developments surrounding Ox Coin. Keep in touch with other holders like you from around the world.
                    </p>
                    <center><img className="img-fluid" src="assets/img/oxcoin/discord_logo.png" width="10%" height="10%"  alt="" /></center>
                </div>
            </div>

            <div className="oxcoin_section_5">
                <div className="container">
                    <div className="row box">
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <p className="title1">100mio</p>
                            <p className="title2">Total Supply</p>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <p className="title1">OX</p>
                            <p className="title2">Symbol</p>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <p className="title1">DEFI</p>
                            <p className="title2">Blockchain</p>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-12">
                            <p className="title1">Australia</p>
                            <p className="title2">Country of Origin</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxcoin_section_6">
                <div className="container">
                    <p className="title1">Frequently Asked Questions</p>
                    <p className="title2">OX coin is built on the DEFI blockchain network, with limited supply of 100mio there is plenty of ways you can utilize Ox coin.</p>
                    <div className="row box_contain">
                        <div className="col-xl-5 col-md-6 col-sm-12">
                            <div className="box">
                                <p className="title3">How Can I Buy</p>
                                <p className="title4">By registering an account on Ox Stocks, you’ll have access to convert FIAT into OX Coin.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6 col-sm-12">
                            <div className="box">
                                <p className="title3">What Can I Do With Ox?</p>
                                <p className="title4">You can use Ox Coin to buy NFT’s, Domains and other digital assets on our Ox Marketplace.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row box_contain">
                        <div className="col-xl-5 col-md-6 col-sm-12">
                            <div className="box">
                                <p className="title3">Where is Ox Stored?</p>
                                <p className="title4">Ox Coin will be securely stored in your Ox Wallet.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6 col-sm-12">
                            <div className="box">
                                <p className="title3">How Much is 1 Ox Coin</p>
                                <p className="title4">1 OX Coin equates to $0.10 USD.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="oxcoin_section_7">
                <div className="container">
                    <p className="title1">Stay up to date with Ox Coin news & updates</p>
                    <p className="title2">Join our Ox Coin database</p>
                    <div className="box">
                        <input type="email" className="form-control email_input" placeholder="Your Email" />
                        <button className="btn btn-warning btn_subscribe">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="oxcoin_section_8">
                <div className="container">
                    <Download />
                </div>
            </div>
        </Fragment>
    )
}

export default Oxcoin;