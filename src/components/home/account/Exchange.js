import React, { Fragment, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Nav from '../../include/Nav';
import Resbtn from '../../include/Resbtn';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Exchange = ({ isAuthenticated }) => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

    if(isAuthenticated !== null){
        if(isAuthenticated === false){
            return <Navigate to="/login" />
        }
    }
    return (
        <Fragment>
            <div className="aboutus_section_1">
                <div className="container">
                    <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                        <Link to="/"><img className="img-fluid" src="../assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "20%", left: "0" }} /></Link>
                        <Nav />
                    </div>
                    <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                        <Link to="/"><img className="img-fluid" src="../assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                        {/* <Link to="" className="nav-link navbar_rightbox" href="#" >
                        &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                            
                        </Link> */}
                        <Resbtn />
                    </div>
                    <div className="row aboutus_link_tab">
                        <p className="aboutus_link_title">Account Info</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Account Info</span></p>
                    </div>
                </div>
            </div>

            <div className='account_section_2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='left_box'>
                                <Link to="/account/dashboard">
                                <div className='item'>
                                    <img className='img-fluid' src='../assets/img/account/dash_yellow.png' />
                                    <label>Dashboard</label>
                                </div>
                                </Link>
                                <Link to="/account/exchange">
                                <div className='item active'>
                                    <img className='img-fluid' src='../assets/img/account/exchange_white.png' />
                                    <label>Exchange</label>
                                </div>
                                </Link>
                                <Link to="/account/nft">
                                <div className='item'>
                                    <img className='img-fluid' src='../assets/img/account/nft_yellow.png' />
                                    <label>NFT's</label>
                                </div>
                                </Link>
                                <Link to="/account/wallet">
                                <div className='item'>
                                    <img className='img-fluid' src='../assets/img/account/wallet_yellow.png' />
                                    <label>Wallet</label>
                                </div>
                                </Link>
                                <Link to="/account/profile">
                                <div className='item'>
                                    <img className='img-fluid' src='../assets/img/account/profile_yellow.png' />
                                    <label>Profile</label>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Exchange.propTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});
  
export default connect(mapStateToProps, { })(Exchange);