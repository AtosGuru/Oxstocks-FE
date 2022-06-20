import React, { Fragment, useEffect } from 'react';
import '../../assets/css/home/Crypto.scss';
import Nav from '../include/Nav';

import { Fade }  from "react-reveal";

import { Link } from 'react-router-dom';

import Resbtn from '../include/Resbtn';
const Crypto = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

        return (
            <Fragment>
                <div className="crypto_section_1">
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
                    <div className="row crypto_link_tab">
                        <p className="crypto_link_title">Crypto</p>
                        <p className="crypto_link_info1">Home &gt; <span className="crypto_link_info2">Crypto</span></p>
                    </div>
                    </div>
                </div>

                <div className="crypto_section2">
                    <div className="container">
                        <div className="row crypto_panel_body">
                            <Fade right>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/index/btc.png" width="40" height="40" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Bitcoin</label>
                                <label className="crypto_img_right_item1_text2">$61.127K -0.004%</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/index/eth.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Ethereum</label>
                                <label className="crypto_img_right_item1_text2">$4.321K -0.003%</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/crypto/ada.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Cardano</label>
                                <label className="crypto_img_right_item1_text2">$1.997 -0.004%</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/crypto/Canvas.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">XRP</label>
                                <label className="crypto_img_right_item1_text2">$1.064 -0.003%</label>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 col-xs-6 crypto_cryptoitem_main">
                                <img className="img-fluid" src="assets/img/crypto/doge.png" width="40" height="40"  alt="" />
                                <div className="crypto_img_right_item1">
                                    <label className="crypto_img_right_item1_text1">Dogecoin</label>
                                    <label className="crypto_img_right_item1_text2">$0.291 -0.007%</label>
                                </div>
                            </div>
                        </Fade>
                        </div>

                        <p style={{ color: 'white', fontSize: '2rem', padding: '5% 0 20%' }}>Coming Soon</p>
                        
                        {/* <Fade left>
                        <div className="row crypto_input_tab">
                            <div className="col-md-4">
                                <input type="text" className="form-control" id="filterbykeyword" placeholder="Filter By Keyword" />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select" id="pagesize" >
                                    <option value="0" className="ex">Page Size</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        </Fade>
                        
                        <Fade bottom>
                        <div className="row crypto_crypto_row_head">
                            <div className="crypto_cryptoitem">Rank</div>
                            <div className="crypto_cryptoitem">Coin</div>
                            <div className="crypto_cryptoitem">Price</div>
                            <div className="crypto_cryptoitem">Market Cup</div>
                            <div className="crypto_cryptoitem">Volume 24h</div>
                            <div className="crypto_cryptoitem">All Time High</div>
                            <div className="crypto_cryptoitem">1h</div>
                            <div className="crypto_cryptoitem">24h</div>
                            <div className="crypto_cryptoitem">Weekly</div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">1</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/index/btc.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Bitcoin</label>
                                <label className="crypto_img_right_item1_text2">BTC</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$62.215K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$1173.408B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$42.335B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$66.083K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.023%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.010%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">2</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/index/eth.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Ethereum</label>
                                <label className="crypto_img_right_item1_text2">ETH</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$4.304K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$508.616B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$28.268B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$4.430K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.015%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.005%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">3</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/crypto/HEX.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">HEX</label>
                                <label className="crypto_img_right_item1_text2">HEX</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$0.231</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$132.023B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$40.104M</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$0.487</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.002%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.063%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">4</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/crypto/bnb.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Binance Coin</label>
                                <label className="crypto_img_right_item1_text2">BNB</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$527.774</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$88.738B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$3.072B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$677.212</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.017%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.007%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">5</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/crypto/usdt.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Telher</label>
                                <label className="crypto_img_right_item1_text2">USDT</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$0.231</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$132.023B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$40.104M</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$0.487</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.002%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.063%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">6</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/crypto/HEX.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">HEX</label>
                                <label className="crypto_img_right_item1_text2">HEX</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$0.231</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$132.023B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$40.104M</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$0.487</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.002%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.063%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">7</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/index/btc.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Bitcoin</label>
                                <label className="crypto_img_right_item1_text2">BTC</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$62.215K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$1173.408B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$42.335B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$66.083K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.023%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.010%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">8</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/index/eth.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_">Ethereum</label>
                                <label className="crypto_img_right_item1_text2">ETH</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$4.304K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$508.616B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$28.268B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$4.430K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.015%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.005%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">9</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/crypto/HEX.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">HEX</label>
                                <label className="crypto_img_right_item1_text2">HEX</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$0.231</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$132.023B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$40.104M</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$0.487</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.002%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.063%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        <div className="row crypto_crypto_row">
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">10</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <img className="img-fluid" src="assets/img/index/eth.png" width="33" height="33" alt="" />
                                <div className="crypto_img_right_item1">
                                <label className="crypto_img_right_item1_text1">Ethereum</label>
                                <label className="crypto_img_right_item1_text2">ETH</label>
                                </div>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$4.304K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <label className="crypto_img_right_item1_text1">$508.616B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$28.268B</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text1">$4.430K</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_green">0.015%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <label className="crypto_img_right_item1_text_warning">-0.005%</label>
                            </div>
                            <div className="crypto_cryptoitem_body">
                            <button type="button" className="crypto_buy_btn">Buy</button>
                            </div>
                            <div className="crypto_cryptoitem_body">
                                <button type="button" className="crypto_sell_btn">Sell</button>
                            </div>
                        </div>
                        </Fade>

                        <div className="crypto_pagination">
                                <img className="img-fluid" src="assets/img/index/left_icon.png" id="left_icon" width="33" height="33"  alt="" />
                                <ul className="crypto_pagination_ul" id="pagination_ul">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>...</li>
                                    <li>5657</li>
                                </ul>
                                <img className="img-fluid" src="assets/img/index/right_icon.png" width="33" height="33"  alt=""  />
                        </div> */}
                            
                    </div>
                </div>
            </Fragment>
        )
}

export default Crypto;