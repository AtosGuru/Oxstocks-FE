import React , { Fragment, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Nav from '../include/Nav';
import "../../assets/css/auth/Login.scss";
import Download from '../include/Download';
import Resbtn from '../include/Resbtn';

import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ login, isAuthenticated}) => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        // toast.success('Login Success', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // })
        // setTimeout(() => (<Navigate to="/dashboard" />), 2000)
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
                        <p className="aboutus_link_title">Login</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Login</span></p>
                    </div>
                </div>
            </div>
            <div className="login_section">
                <img className="login_img" src="assets/img/auth/login.png"alt="" />
                <div className="container">
                    <div className="row">   
                        <div className="col-xl-6 col-md-8 col-sm-12">
                            <div className="login_panel">
                                <p className="login_title">Log In</p>
                                <form onSubmit={onSubmit}>
                                    <div className="login_email">
                                        <input type="email" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="Email" 
                                            name="email" 
                                            value={email} 
                                            onChange={onChange} 
                                            required
                                            />
                                    </div>
                                    <div className="login_pass">
                                        <input type="password" 
                                            className="form-control" 
                                            id="password" 
                                            placeholder="Password" 
                                            name="password" 
                                            value={password} 
                                            onChange={onChange} 
                                            />
                                    </div>
                                    <div className="login_remember">
                                        <input type="checkbox" className="remember_icon" /> <span className="login_rem_text">Remember Me </span>
                                    </div>
                                    <div className="forget_box">
                                        <div className="login_submit_form"><button type="submit" className="login_submit_btn">Submit</button></div>
                                        <p className="forget_text">Forget Your Password?</p>
                                    </div>
                                    <div className="signup_text">
                                        <p><span className="login_newUser_text">New User?</span>&nbsp;<span className="login_signUp_text"><Link to="/register">Sign Up</Link></span></p>
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

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};
  
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});
  
export default connect(mapStateToProps, { login })(Login);