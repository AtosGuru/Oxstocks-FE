import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
        let assets_const = 'assets';
        if((window.location.pathname).split('/').length === 3) {
            assets_const = '../assets';
        }
        return (
            <Fragment>
                {/* <Fade top> */}
                <div className="footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12 footer1_tab">
                            <img className="img-fluid" src={`${assets_const}/img/index/logo.png`} width="200" height="30" alt="" />
                            <p className="footer1_text">OX STOCKS is owned and operated by Australian Company OX STOCKS PTY LTD 
                                (ABN : 61 654 485 300) before using our service please review our Terms and Conditions. 
                                OX STOCKS is a platform, we are not brokers, financial institutions or creditors. We do not 
                                provide financial advice - as such as do not hold an Australian Financial Services License. 
                                For more information please email us at info@oxstocks.com</p>
                        </div>
                        <div className="col-xl-2 col-md-4 footer2_tab">
                            <p className="footer2_text1">Company</p>
                            <p className="footer2_text2">&gt; Home</p>
                            <p className="footer2_text2">&gt; Crypto</p>
                            <p className="footer2_text2">&gt; Shares</p>
                            <p className="footer2_text2">&gt; Marketplace</p>
                            <p className="footer2_text2">&gt; Mining</p>
                            <p className="footer2_text2">&gt; Ox coin</p>
                        </div>
                        <div className="col-xl-2 col-md-4 footer3_tab">
                            <p className="footer2_text1">Information</p>
                            <Link to="/terms"><p className="footer2_text2">&gt; Terms & Conditions </p></Link>
                            <Link to="/privacy"><p className="footer2_text2">&gt; Privacy Policy </p></Link>
                            <p className="footer2_text2">&gt; Referral Program</p>
                            <p className="footer2_text2">&gt; Contact us</p>
                            </div>
                        <div className="col-xl-3 col-md-4 footer4_tab">
                            <p className="footer2_text1">OX Community</p>
                            <p className="footer4_text2">Join our OX Community on Discord 
                            latest news from us.</p>
                            <Link to="/"><img className="img-fluid" src={`${assets_const}/img/index/discord.png`} width="80%" alt="" /></Link>
                            <div className='sendemail-home'>
                                <input type="email" id="email" name="email" className="sendemailinput" placeholder="Email..." />
                                <img src={`${assets_const}/img/index/send.png`} className='sendemailimg' alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row social_link">
                        <div className="col-xl-12 col-md-12">
                            <ul className="footer1_ul">
                                <li><Link to="/"><img className="img-fluid" src={`${assets_const}/img/index/facebook.png`} alt="" width="50" height="50" /></Link></li>
                                <li><Link to="/"><img className="img-fluid" src={`${assets_const}/img/index/instagram.png`} alt="" width="50" height="50" /></Link></li>
                                <li><Link to="/"><img className="img-fluid" src={`${assets_const}/img/index/youtube.png`} alt="" width="50" height="50" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="footer_hr" />
                    <p className="footer_text">OX STOCKS <span className="footer_text_white">by</span> KPVE GROUP</p>
                    </div>
                </div>
                {/* </Fade> */}
            </Fragment>
        )
}

export default Footer;