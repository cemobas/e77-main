import React from 'react';
import PropTypes from 'prop-types';

class Tags extends React.Component {

  render() {
    return (
      <div className="sidebar-box">
        <h3 className="heading">Tags</h3>
        <ul className="tags">
          <li><a href="#">Travel</a></li>
          <li><a href="#">Adventure</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Freelancing</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Adventure</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Freelancing</a></li>
        </ul>
      </div>
    )
  }
}

Tags.propTypes = {};

export default Tags;