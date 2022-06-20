import React, {Fragment} from 'react';
import '../../../src/assets/css/home/Referral.scss';

import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import Resbtn from '../include/Resbtn';
import Download from '../include/Download';

const Referral = () => {
    return (
        <Fragment>
            <div className="aboutus_section_1">
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
                        <p className="aboutus_link_title">Referral</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Referral</span></p>
                    </div>
                </div>
            </div>
            <div className='referral_section_2'>
                <div className='container'>
                    <div className='row section2_box'>
                        <div className='col-xl-6 col-md-6 col-sm-12'>
                            <div className='box_left'>
                                <p className='title1'>Referral Partner</p>
                                <div className='panel1'>
                                    <input type="text" className="form-control" placeholder='Full Legal Name' />
                                    <input type="text" className='form-control' placeholder='Your Email' />
                                </div>
                                <input type="number" className="form-control margin-top-20" placeholder="Mobile Number" />

                                <p className='title2 margin-top-20'>Do you wish to be considered as a referral partner? *</p>
                                <div className='panel2'>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='referral_partner' /></div>
                                        <div><p className='title3'>Yes</p></div>
                                    </div>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='referral_partner'  /></div>
                                        <div><p className='title3'>Not Sure</p></div>
                                    </div>
                                </div>

                                <p className='title2 margin-top-20'>Preferred Method of Payment *</p>
                                <div className='panel2'>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='payment_radio' /></div>
                                        <div><p className='title3'>Crypto</p></div>
                                    </div>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='payment_radio'  /></div>
                                        <div><p className='title3'>FIAT</p></div>
                                    </div>
                                </div>

                                <p className='title2 margin-top-20'>How many people could you sign up in the next 60 days? *</p>
                                <div className='panel2'>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='people_radio' /></div>
                                        <div><p className='title3'>1~10</p></div>
                                    </div>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='people_radio'  /></div>
                                        <div><p className='title3'>10+</p></div>
                                    </div>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='people_radio' /></div>
                                        <div><p className='title3'>100+</p></div>
                                    </div>
                                </div>

                                <p className='title2 margin-top-20'>Would you be advertising as an individual or a business? *</p>
                                <div className='panel2'>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='personal_radio' /></div>
                                        <div><p className='title3'>Personal</p></div>
                                    </div>
                                    <div className='panel2_sub'>
                                        <div><input type="radio" name='personal_radio'  /></div>
                                        <div><p className='title3'>Business</p></div>
                                    </div>
                                </div>
                                <button type='button' className='btn btn-warning margin-top-10'>Submit</button>
                            </div>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12'>
                            <img className='img-fluid' src='assets/img/referral/referral.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='referral_section_3'>
                <div className='container'>
                    <Download />
                </div>
            </div>
            
        </Fragment>
    )
}

export default Referral;