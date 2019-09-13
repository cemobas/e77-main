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

  trends = [{ "title": "Home" }, { "title": "Technology" }, { "title": "Article" }]

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
      page: newPage
    });
  }

  home = () => {
    console.log(`home is being rendered.`);
    return (
      <div className="site-wrap">
        <Header trends={this.trends} navigate={this.navigate.bind(this)} />
        <Main mainPosts={this.state.mainPosts} />
        <Recent postCount={this.state.postCount} />
        {/** Random component withdrawn */}
        <Newsletter />
        <Footer />
      </div>
    );
  }
  
  tech = () => {
    console.log(`tech is being rendered.`);
    return (
      <div className="site-wrap">
        <Header trends={this.trends} navigate={this.navigate.bind(this)} />
        <div>Bir tech dilegim var, mutlu ol yeter.</div>
        <Newsletter />
        <Footer />
      </div>
    );
  }
  
  article = () => {
    console.log(`article is being rendered.`);
    return (
        <div className="site-wrap">
        <Header trends={this.trends} navigate={this.navigate.bind(this)} />
        <Article />
        <Newsletter />
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
          return <h1>No project match</h1>;
      }
  }
}

export default App;

/**
 * mainPosts = [
    { "title": "Trump sert çıktı!", "theme": "Politics", "short": "Trump muthis bir adam, diye soze baslayan Macron, konusmanin gerisinde zehir zemberek konustu.", "illustration": "images/trump.jpg", "date": "2019-12-12", "tags": ["trump", "abd"] },
    { "title": "React is brillant", "theme": "Technology", "short": "React is so great that you can build websites in about ten minutes!", "illustration": "images/react.jpg", "date": "2019-12-11", "tags": ["react", "js"] },
    { "title": "Koltuk almak zor iş", "theme": "Furniture", "short": "Bugün mobilya dünyasında büyük bir kaos var, koltuk almak için yüz elli dükkan dolaşıyoruz.", "illustration": "images/koltuk.jpg", "date": "2019-12-10", "tags": ["koltuk", "mobilya"] },
    { "title": "TV bakıyoruz...", "theme": "Electronics", "short": "Film izlemek, dizi izlemek için farklı TVler almanız gerekebilir.", "illustration": "images/television.jpg", "date": "2019-12-09", "tags": ["hd", "tv"] },
    { "title": "Master Chef'te skandal", "theme": "Entertainment", "short": "Ünlü yemek programında dün akşam yaşananlar utanç vericiydi.", "illustration": "images/chef.jpg", "date": "2019-12-08", "tags": ["master chef", "cullinary"] }
  ];
 */