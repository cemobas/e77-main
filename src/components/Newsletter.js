import React from 'react'
import PropTypes from 'prop-types'

class Newsletter extends React.Component {

    render() {
        return (
            <div className="site-section bg-lightx">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-md-5">
                    <div className="subscribe-1 ">
                      <h2>Subscribe to our newsletter</h2>
                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt error illum a explicabo, ipsam nostrum.</p>
                      <form action="#" className="d-flex">
                        <input type="text" className="form-control" placeholder="Enter your email address" />
                        <input type="submit" className="btn btn-primary" value="Subscribe" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

Newsletter.propTypes = {}

export default Newsletter