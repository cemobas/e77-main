import React from 'react';
import PropTypes from 'prop-types';

class Related extends React.Component {

  render() {
    return (
      
      <div className="site-section bg-light">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <h2>More Related Posts</h2>
          </div>
        </div>

        <div className="row align-items-stretch retro-layout">

          <div className="col-md-5 order-md-2">
            <a href="single.html" className="hentry img-1 h-100 gradient" style={{ backgroundImage: "url('images/img_4.jpg')" }}>
              <span className="post-category text-white bg-danger">Travel</span>
              <div className="text">
                <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                <span>February 12, 2019</span>
              </div>
            </a>
          </div>

          <div className="col-md-7">

            <a href="single.html" className="hentry img-2 v-height mb30 gradient" style={{ backgroundImage: "url('images/img_1.jpg')" }}>
              <span className="post-category text-white bg-success">Nature</span>
              <div className="text text-sm">
                <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                <span>February 12, 2019</span>
              </div>
            </a>

            <div className="two-col d-block d-md-flex">
              <a href="single.html" className="hentry v-height img-2 gradient" style={{ backgroundImage: "url('images/img_2.jpg')" }}>
                <span className="post-category text-white bg-primary">Sports</span>
                <div className="text text-sm">
                  <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                  <span>February 12, 2019</span>
                </div>
              </a>
              <a href="single.html" className="hentry v-height img-2 ml-auto gradient" style={{ backgroundImage: "url('images/img_3.jpg')" }}>
                <span className="post-category text-white bg-warning">Lifestyle</span>
                <div className="text text-sm">
                  <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                  <span>February 12, 2019</span>
                </div>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
    )
  }
}

Related.propTypes = {};

export default Related;