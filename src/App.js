import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Recent from "./components/Recent";
import Random from "./components/Random";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Article from "./components/Article";
import { getMainData } from './api/postApi';
import './App.css';

class App extends Component {

  state = {
    page: 'Home',
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
  
  navigate = (newPage) => () => {
    console.log(`Navigating to ${newPage}`);
    this.setState({
      newPage: newPage
    });
  }
    
  openArticle = (articleId) => () => {
    console.log(`Navigating to Article with article index: ${articleId}`);
    this.setState({
      page: 'Article',
      articleId: articleId
    });
  }

  home = () => {
    console.log(`home is being rendered.`);
    return (
      <div className="site-wrap">
        <Header navigate={this.navigate.bind(this)} />
        <Main mainPosts={this.state.mainPosts} openArticle={this.openArticle.bind(this)} />
        <Recent postCount={this.state.postCount} openArticle={this.openArticle.bind(this)} />
        {/** <Random /> */}
        {/** <Newsletter /> */}
        <Footer />
      </div>
    );
  }
  
  tech = () => {
    console.log(`tech is being rendered.`);
    return (
      <div className="site-wrap">
        <Header navigate={this.navigate.bind(this)} />
        <div>Bir tech dilegim var, mutlu ol yeter.</div>
        {/** <Newsletter /> */}
        <Footer />
      </div>
    );
  }
  
  article = () => {
    console.log(`article is being rendered.`);
    return (
        <div className="site-wrap">
        <Header navigate={this.navigate.bind(this)} />
        <Article articleId={this.state.articleId} navigate={this.navigate.bind(this)} />
        {/** <Newsletter /> */}
        <Footer />
      </div>
    );
  }

  render() {
    console.log(`App is being rendered.`);
    switch (this.state.page) {
        case 'Home':
          return this.home();
        case 'Technology':
          return this.tech();
        case 'Article':
          return this.article();
        default:
          return this.home();
      }
  }
}

export default App;