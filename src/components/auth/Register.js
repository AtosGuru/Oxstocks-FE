import React , { Fragment, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Nav from '../include/Nav';
import "../../assets/css/auth/Register.scss";
import Download from '../include/Download';
import Resbtn from '../include/Resbtn';

import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ register, isAuthenticated }) => {
    
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mobilenumber: '',
        email: '',
        date_form: '',
        referralcode: '',
        password: '',
        repassword: ''
      });
    
      const { firstname, lastname, mobilenumber, email, date_form, referralcode, password, repassword } = formData;
    
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== repassword) {
            toast.warning('Passwords do not match', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }) 
        } else {
          register({ firstname, lastname, mobilenumber, email, referralcode, password, repassword });
        }
      };


      if (isAuthenticated) {
        //     toast.success('Register Success', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     }) 
        // setTimeout(() => {
        //     alert('sdf');
        //     return <Navigate to="/dashboard" />
        // }, 200)
        return <Navigate to="/dashboard" />
      }

    return (
        <Fragment>
            <ToastContainer />
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
                        <p className="aboutus_link_title">Register</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Register</span></p>
                    </div>
                </div>
            </div>
            <div className="register_section">
                <img className="register_img" src="assets/img/auth/register.png" alt="" />
                <div className="container">
                    <div className="row">   
                        <div className="col-xl-6 col-md-8 col-sm-12">
                            <div className="register_panel">
                                <p className="register_title">Register</p>
                                <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_email">
                                        <input 
                                            type="text" 
                                            className="form-control common_input_form" 
                                            id="firstname" 
                                            placeholder="Firstname" 
                                            name="firstname" 
                                            value={firstname} 
                                            onChange={onChange}
                                            />
                                    </div>
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_pass">
                                        <input 
                                            type="text" 
                                            className="form-control common_input_form" 
                                            id="lastname" 
                                            placeholder="Lastname" 
                                            name="lastname" 
                                            value={lastname} 
                                            onChange={onChange}
                                            />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_email">
                                        <input 
                                            type="number" 
                                            className="form-control common_input_form" 
                                            id="mobilenumber" 
                                            placeholder="Mobile Number" 
                                            name="mobilenumber" 
                                            value={mobilenumber} 
                                            onChange={onChange}
                                            />
                                    </div>
                                    <div className="col-xl-6 col-md-12 col-sm-12 register_email">
                                        <input 
                                            type="text" 
                                            className="form-control common_input_form" 
                                            id="email" 
                                            placeholder="Email Address" 
                                            name="email" 
                                            value={email} 
                                            onChange={onChange}
                                            />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="register_email">
                                        <input 
                                            type="date" 
                                            id="date_form" 
                                            className="dateinput form-control common_input_form" 
                                            placeholder="DD MM YY" 
                                            name="date_form" 
                                            value={date_form} 
                                            onChange={onChange}
                                            />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="register_email">
                                        <input type="text" 
                                        className="form-control common_input_form " 
                                        id="referralCode" 
                                        placeholder="Referral Code" 
                                        name="referralcode" 
                                        value={referralcode} 
                                        onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="register_email">
                                        <input 
                                            type="password" 
                                            className="form-control common_input_form " 
                                            id="password" 
                                            placeholder="Password" 
                                            name="password" 
                                            value={password} 
                                            onChange={onChange}
                                            />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="register_email">
                                        <input 
                                            type="password" 
                                            className="form-control common_input_form " 
                                            id="repassword" 
                                            placeholder="Conform Password" 
                                            name="repassword" 
                                            value={repassword} 
                                            onChange={onChange}
                                            />
                                    </div>
                                </div>
                                <div className="register_remember">
                                    <input type="checkbox" className="remember_icon" /> <span className="register_rem_text">I agree to the <Link to="/terms"><span className="register_rem_text1">Terms & Conditions</span></Link> </span>
                                </div>
                                <div className="forget_box">
                                    <div className="register_submit_form"><button type="submit" className="register_submit_btn">Sign Up</button></div>
                                </div>
                                <div className="signup_text">
                                    <p><span className="register_newUser_text">Already have an Account?</span>&nbsp;<span className="register_signUp_text"><Link to="/login">Log In</Link></span></p>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <Download />
                </div>
            </div>
        </Fragment>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps, { register })(Register);