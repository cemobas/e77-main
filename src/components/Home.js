import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Main from "./Main";
import Recent from "./Recent";
import Footer from "./Footer";
import { getMainData } from '../api/postApi';

class Home extends React.Component {

    state = {
        postCount: 0,
        mainPosts: []
    }
    
    componentDidMount() {
        getMainData()
            .then((res) => {
                this.setState({
                    mainPosts: res.data,
                    postCount: res.data.length,
                    page: 'Home'
                });
            }).catch((error) => {
                console.log(error.response);
        });
    }

    render() {
        console.log(`Home is being rendered.`);
        return (
            <div className="site-wrap">
              <Header />
              <Main mainPosts={this.state.mainPosts} />
              <Recent postCount={this.state.postCount} />
              {/** <Random /> */}
              {/** <Newsletter /> */}
              <Footer />
            </div>
        )
    }
}

export default Home;