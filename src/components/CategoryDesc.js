import React from 'react';
import PropTypes from 'prop-types';

class CategoryDesc extends React.Component {

  render() {
    return (
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Category</span>
              <h3>{this.props.category}</h3>
              <p>Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis non maxime quos reiciendis perferendis doloremque maiores!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CategoryDesc.propTypes = {
  category: PropTypes.string
};

export default CategoryDesc;