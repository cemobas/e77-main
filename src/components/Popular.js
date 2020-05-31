import React from 'react';
import PropTypes from 'prop-types';

class Popular extends React.Component {

  render() {
    return (
      <div className="sidebar-box">
        <h3 className="heading">Popular Posts</h3>
        <div className="post-entry-sidebar">
          <ul>
            <li>
              <a href="">
                <img src="images/img_1.jpg" alt="Image placeholder" className="mr-4" />
                <div className="text">
                  <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                  <div className="post-meta">
                    <span className="mr-2">March 15, 2018 </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img src="images/img_2.jpg" alt="Image placeholder" className="mr-4" />
                <div className="text">
                  <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                  <div className="post-meta">
                    <span className="mr-2">March 15, 2018 </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <img src="images/img_3.jpg" alt="Image placeholder" className="mr-4" />
                <div className="text">
                  <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                  <div className="post-meta">
                    <span className="mr-2">March 15, 2018 </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

Popular.propTypes = {};

export default Popular;