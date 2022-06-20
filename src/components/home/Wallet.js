import React, { Fragment, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Nav from '../include/Nav';
import Resbtn from '../include/Resbtn';
import '../../assets/css/home/Wallet.scss';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//frame
import { Slider as FramePanel } from '@mui/material';
import { styled } from '@mui/material/styles';

import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { sendToken, getTransaction } from '../../actions/wallet';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import copy from 'copy-text-to-clipboard';

// const calculateValue = (value) => { 
//     // console.log(value);
//     return (value / 0.01 * 100).toFixed()+'%';
// }

const PrettoSlider = styled(FramePanel)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const Wallet = ({ sendToken, user, isAuthenticated, transactions, getTransaction, loadUser }) => {

    

    useEffect(() => {
        if(user.wallet != undefined)
            getTransaction(user.wallet)
    },[user.wallet] )

    useEffect(() => {
        loadUser()
    },[transactions] )

    const [formData, setFormData] = useState({
        toAddress: '',
        value: '',
        gas: '',
        password: ''
    })

    
    if(isAuthenticated !== null){
        if(isAuthenticated === false){
            return <Navigate to="/login" />
        }
    }
        
    const { toAddress, value, gas, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        const data = {
            fromAddress: user.wallet,
            toAddress: toAddress,
            value: value * (10 ** 18),
            gas: gas,
            password: password
        }
        console.log(data);
        sendToken(data);
    }

    const copyAddress = e => {
        copy(e.target.innerText);
        toast.success('Copied!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) 
    }
    
    const return_url = 'http://www.oxstocks.com/paypal-success.php';
    const cancel_return = 'http://www.oxstocks.com/paypal-cancel.php';
    const paypal_url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
    // const paypal_url = 'https://www.paypal.com/cgi-bin/webscr';
    /* Live url : https://www.paypal.com/cgi-bin/webscr */
    const notify_url = 'http://www.oxstocks.com/paypal-notify.php';
    //Here we can used seller email id.
    const merchant_email = 'be1512t6@gmail.com';



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
                        <p className="aboutus_link_title">Wallet</p>
                        <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">Wallet</span></p>
                    </div>
                </div>
            </div>
            <div className="wallet_section_2">


                <form name="myform" action={paypal_url} method="post" id="payWithPayPalForm">
                    <input type="hidden" name="cmd" value="_xclick" />
                    <input type="hidden" name="business" value={merchant_email} />
                    <input type="hidden" name="notify_url" value={notify_url} />
                    <input type="hidden" name="cancel_return" value={cancel_return} />
                    <input type="hidden" name="return" value={return_url} />
                    <input type="hidden" name="rm" value="2" /> 
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="charset" value="utf-8" />
                    <input type="hidden" name="item_name" value="OXSTOCKS" />
                    <input type="hidden" name="first_name" value="John" />
                    <input type="hidden" name="last_name" value="Doe" />
                    <input type="hidden" name="email" value="sb-z8isi9208693@business.example.com" />
                    <input type="hidden" name="custom" value="12121"/>
                    <input type="hidden" name="invoice" value="3" />
                    <input type="hidden" name="amount" value="100" />
                    {/* <input type="submit" value="Paypal" /> */}
                </form>


                <div className='wallet_box2'>
                    <div className='container'>
                        <div className='row'>
                            <p className='title1'>Address </p>
                        </div>
                        <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <p onClick={copyAddress} className="label1">
                                    {user.wallet}
                                </p> 
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className='pair2'>
                                    <label className='title2'>Balance</label>
                                    <label className='label2'>{ (user.coin_balance) / (10 ** 18) }</label>
                                    {/* <input type="text" className='form-control input' /> */}
                                    <label className='title2'>OX</label>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <p className='title1 margin-top-20'>To Address</p>
                        </div>
                        <div className='row'>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className='pair1'>
                                    <input 
                                        type="text" 
                                        className=" input input_address" 
                                        placeholder='Address' 
                                        id="input_address"
                                        name="toAddress"
                                        onChange={onChange} required
                                        /> 
                                    {/* <button type="button" className='btn btn-warning'>From Addressbook</button> */}
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className='pair2'>
                                    <label className='title2'>Amount</label>
                                    <input 
                                        type="number" 
                                        className=' input input_address' 
                                        name="value"
                                        onChange={onChange} required
                                         />
                                </div>
                            </div>
                        </div>
                        
                        <p className='title1 margin-top-20'>Password</p>
                        <div className='row'>
                            <div className='col-xl-6 col-md-6 col-sm-12'>
                                <div className='pair1'>
                                    <input 
                                        type="password" 
                                        className=" input input_address" 
                                        placeholder='password' 
                                        name="password"
                                        onChange={onChange} required
                                        /> 
                                    {/* <button type="button" className='btn btn-warning'>From Addressbook</button> */}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-6 col-md-6 col-sm-12'>
                                {/* <p className='title1 margin-top-20'>Gas Fee</p> */}
                                {/* <div className='frame'>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        min={0}
                                        max={21000}
                                        step={1} 
                                        name="gas"
                                        onChange={onChange}
                                        // scale={calculateValue} 
                                    />
                                </div> */}
                                <button type='submit' className='btn btn-warning btn_send margin-top-20'>Send</button>
                            </div>
                        </div>
                        
                        </form>

                        <div className='row'>
                            <p className='title1 margin-top-20'>Last Transaction</p>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {Object.keys(transactions).length > 0 ? (
                                    transactions.map((item) => (
                                        <tr>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td>{(item.value) / (10 ** 18)}</td>
                                            <td>{item.time}</td>
                                        </tr>
                                    ))
                                ) : (<></>) }
                                      
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

Wallet.propTypes = {
    sendToken: PropTypes.func.isRequired,
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    transactions: PropTypes.array,
    getTransaction: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    transactions: state.wallet.transactions
});
  
export default connect(mapStateToProps, { sendToken, getTransaction, loadUser })(Wallet);