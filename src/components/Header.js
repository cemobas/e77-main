import React from 'react'
import PropTypes from 'prop-types'

const Trend = ({ trends }) => (
    <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
        {
            trends.map((trend, i) => {
                return (
                    <li><a href={trend.link}>{trend.title}</a></li>
                )
            })
        }
        <li className="d-none d-lg-inline-block"><a href="#" className="js-search-toggle"><span className="icon-search"></span></a></li>
    </ul>
)

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { trends } = this.props
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
                                <a href="index.html" className="text-black h2 mb-0">Mini Blog</a>
                            </div>

                            <div className="col-8 text-right">
                                <nav className="site-navigation" role="navigation">
                                    <Trend trends={trends} />
                                </nav>
                                <a href="#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span className="icon-menu h3"></span></a></div>
                        </div>

                    </div>
                </header>
            </div>
        )
    }
}

Header.propTypes = {
    trends: PropTypes.array
}

export default Header