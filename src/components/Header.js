import React from 'react';
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
import { getThemeData } from '../api/postApi';

const Trend = ({ trends }) => (
    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
        {
            trends.map((trend, i) => {
                return (
                    <li key={i}><a>{trend._id}</a></li>
                )
            })
        }
        {/** <li className="d-none d-lg-inline-block"><a href="#" className="js-search-toggle"><span className="icon-search"></span></a></li>*/}
=======
import PropTypes from 'prop-types';
import { getCategoryData } from '../api/postApi';

const Category = ({ categories, navigate }) => (
    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
        {
            categories.map((category, i) => {
                return (
                    <li key={i}><a onClick={navigate('Category', category._id, 0, 9)}>{category._id}</a></li>
                )
            })
        }
        {/**<li className="d-none d-lg-inline-block"><a href="#" className="js-search-toggle"><span className="icon-search"></span></a></li>*/}
>>>>>>> Stashed changes
    </ul>
)

class Header extends React.Component {
<<<<<<< Updated upstream
=======
    
    state = {
        categories: []
    }
>>>>>>> Stashed changes

    componentDidMount() {
        getCategoryData()
            .then((res) => {
                console.log(`Retrieving categories for navbar...`);
                this.setState({
                    categories: res.data
                });
            }).catch((error) => {
                console.log(error.response);
            });
    }
    
    state = {
        trends: []
    }

    render() {
        console.log(`Header is being rendered.`);
        return (
            <div>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <header className="site-navbar" role="banner">
                    <div className="container-fluid">
                        <div className="row align-items-center">

                            <div className="col-12 search-form-wrap js-search-form">
                                <form method="get" action="#">
                                    <input type="text" id="s" className="form-control" placeholder="Search..." />
                                    <button className="search-btn" type="submit"><span className="icon-search"></span></button>
                                </form>
                            </div>

                            <div className="col-4 site-logo">
                                <Link to="/" className="text-black h2 mb-0">cafe e77</Link>
                            </div>

                            <div className="col-8 text-right">
                                <nav className="site-navigation" role="navigation">
<<<<<<< Updated upstream
                                    <Trend trends={this.state.trends} />
=======
                                    <Category categories={this.state.categories} navigate={navigate} />
>>>>>>> Stashed changes
                                </nav>
                                <a href="#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></a>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        )
    }
}

export default Header