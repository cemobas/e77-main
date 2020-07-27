import React from 'react';
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
    </ul>
)

class Header extends React.Component {

    componentDidMount() {
        getThemeData()
            .then((res) => {
                console.log(`Retrieving themes for navbar...`);
                this.setState({
                    trends: res.data
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
                                    <Trend trends={this.state.trends} />
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