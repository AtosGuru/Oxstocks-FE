import React , { Fragment, useEffect } from 'react';
import '../../../assets/css/home/news/detail.scss';
import Nav from '../../include/Nav';
import Resbtn from '../../include/Resbtn';
import { Link, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNew, getNews } from '../../../actions/news';

const Detail = ({ getNew , getNews ,  new_detail, news }) => {
    const { id } = useParams();
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);

    useEffect(() => {
        getNews();
    }, [getNew]);

    useEffect(() => {
        getNew(id);
    }, [getNew, id]);

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
                        <p className="aboutus_link_title">News Detail</p>
                        <p className="aboutus_link_info1"><Link to="/news">News</Link> &gt; <span className="aboutus_link_info2">News Detail</span></p>
                    </div>
                </div>
            </div>
            <div className="detail_section_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <div className="box">
                                <p className="title1">{ Object.keys(new_detail).length > 0 ? new_detail.title : '<></>'}</p>
                                <div><img className="img-fluid" src="../assets/img/oxnews/news.png" alt=""/></div>
                                <p className="title2">26 October 2021</p>
                                <p className="title3">{ Object.keys(new_detail).length > 0 ? new_detail.comment : '<></>'}</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-5 col-sm-12 box2">
                            <p className="title1">RECENT NEWS</p>
                            {Object.keys(news).length > 0 ? (
                                news.slice(0,3).map((item) => (
                                    <div className="box_recent" key={item._id}>
                                        <div>
                                            <img src="../assets/img/oxnews/news.png" width="50" alt=""/>
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

Detail.propTypes = {
    getNew: PropTypes.func.isRequired,
    getNews: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    news: state.news.news,
    new_detail: state.news.new
})

export default connect(mapStateToProps, { getNew, getNews })(Detail);