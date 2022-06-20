import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Download = () => {
        return (
            <Fragment>
                <div className="row download_tab">
                    <div className="col-lg-6 col-md-5 download_tab_left">
                        <p className="downloadnow_text">DOWNLOAD NOW</p>
                        <p className="oxstocksapp_text">OX STOCKS APP</p>
                    </div>
                    <div className="col-lg-6 col-md-7 donwload_tab_right">
                        <Link to="/"><img className="img-fluid download_img" src="assets/img/index/AppleStore.png" width="280"  alt=""/></Link> &nbsp;
                        <Link to="/"><img className="img-fluid download_img" src="assets/img/index/Googleplay.png" width="280"  alt=""/></Link>
                    </div>
                </div>
            </Fragment>
        )
}

export default Download;