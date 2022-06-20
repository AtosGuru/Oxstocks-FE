import React, { Fragment, useEffect } from 'react';
// import { Fade } from 'react-reveal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getNews } from '../../actions/news';

const News = ({ getNews, news: { news} }) => {

    useEffect(() => {
        getNews();
      }, [getNews]);
    return (
        <Fragment>
            <div className="row">
                {Object.keys(news).length > 0 ? (
                    news.slice(0,3).map((item) => (
                        <div className="col-md-4 dash_news_box" key={item._id}>
                            <div className="dash_section2_box">
                                <Link to={`/news/${item._id}`}><p className="dash_section2_news1_text">{item.title}</p></Link>
                                <Link to={`/news/${item._id}`}><p className="dash_section2_news2_text">{item.comment.substring(0,100)+'...'}</p></Link>
                                <p className="dash_section2_news3_text">OX STOCKS 26    |   October 2021</p>
                            </div>
                        </div>
                    ))
                ) : (<></>) }
            </div>
        </Fragment>
    )
}

News.propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    news: state.news
});

export default connect(mapStateToProps, { getNews })(
    News
);