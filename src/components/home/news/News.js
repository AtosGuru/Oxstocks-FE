import React , { Fragment, useEffect } from 'react';
import '../../../assets/css/home/news/news.scss';
import { Link } from 'react-router-dom';
import Nav from '../../include/Nav';
import Resbtn from '../../include/Resbtn';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNews } from '../../../actions/news';

const News = ({ getNews, news: {news} }) => {
    useEffect(() => {
        const body = document.querySelector('#root');
            body.scrollIntoView({
                behavior: 'smooth'
            }, 500)
    }, []);

    useEffect(() => {
        getNews();
    }, [getNews]);

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
                    <p className="aboutus_link_title">News</p>
                    <p className="aboutus_link_info1">Home &gt; <span className="aboutus_link_info2">News</span></p>
                </div>
                </div>
            </div>
            <div className="news_section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12 box">
                            <p className="title1">All Ox Stock News</p>

                            {
                                Object.keys(news).length > 0 ? (
                                    news.map((item) => (
                                        <div className="box_news">
                                            <div>
                                                <img className="img-fluid" src="assets/img/oxnews/news.png" width="105" alt=""/>
                                            </div>
                                            <div>
                                                <p className="title2">OX STOCKS 26 October 2021</p>
                                                <p className="title3">{item.title}</p>
                                                <Link to={`/news/${item._id}`}><p className="title4">Read More</p></Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (<></>)
                            }
                        </div>
                        <div className="col-xl-4 col-md-5 col-sm-12 box2">
                            <p className="title1">RECENT NEWS</p>

                            {Object.keys(news).length > 0 ? (
                                news.slice(0,3).map((item) => (
                                    <div className="box_recent" key={item._id}>
                                        <div>
                                            <img src="assets/img/oxnews/news.png" width="50" alt=""/>
                                        </div>
                                        <div>
                                            <Link to={`/news/${item._id}`}><p className="title3">{item.title}</p></Link>
                                            <p className="title2">26 October 2021</p>
                                        </div>
                                    </div>
                                ))
                            ) : (<></>) }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
    
}

News.propTypes = {
    getNews: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    news: state.news
});

export default connect(mapStateToProps, { getNews })(
    News
);
