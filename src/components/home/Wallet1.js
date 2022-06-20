import React , { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../include/Nav';
import '../../assets/css/home/Wallet.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Resbtn from '../include/Resbtn';


// import { Modal, Button } from 'react-bootstrap';


// function Send_modal() {
//     const [lgShow, setLgShow] = useState(false);
  
//     return (
//       <>
//         <Button onClick={() => setLgShow(true)}>Large modal</Button>
//         <Modal
//           size="lg"
//           show={lgShow}
//           onHide={() => setLgShow(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-lg">
//               Large Modal
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>...</Modal.Body>
//         </Modal>
//       </>
//     );
//   }


const Wallet = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
    return (
        <Fragment>
            <div className="wallet_section_1">
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

            <div className="wallet_section_2">
                <div className="container">
                    <div className="title_box">
                        <p className="title1">Welcome to OX STOCKS!</p>
                        <p className="title2">XEn5bebpDiDm7LdyaCoXV7UFUXi1ctCpEc</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="box">
                                <p className="title3">Ox Balance (Coin Balance)</p>
                                <p className="title4">0</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <div className="box1">
                                <p className="title5">Buy Ox : $0.45 USD</p>
                                <button className="btn btn-warning">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wallet_section_3">
                <div className="container">
                    <p className="title1">Send OX</p>
                    <div className="box_send">
                        <Link to=""><p className="icon"><ArrowUpwardIcon className="icon_color" /></p></Link>
                        <p className="title2">Send</p>
                    </div>
                </div>
            </div>

            <div className="wallet_section_4">
                <div className="container">
                    <p className="title1">History</p>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <p className="title2">Recent transactions</p>
                                <div className="title3">
                                    <div><label className="margin-10">Price Ox</label></div>
                                    <div>
                                        <label className="margin-10">Amount</label>
                                        <label className="margin-10">USD</label>
                                        <label className="margin-10">From</label>
                                        <label className="margin-10">To</label>
                                        <label className="margin-10">Time</label>
                                    </div>
                                </div>
                                <p className="title4">No Record Found.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Wallet;