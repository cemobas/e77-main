import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Header from "./components/Header";
<<<<<<< Updated upstream
import Home from "./components/Home";
/** import Random from "./components/Random";
import Newsletter from "./components/Newsletter"; */
import Footer from "./components/Footer";
import Article from "./components/Article";
=======
import Main from "./components/Main";
import Recent from "./components/Recent";
import RecentByCategory from "./components/RecentByCategory";
import Footer from "./components/Footer";
import Article from "./components/Article";
import CategoryDesc from "./components/CategoryDesc";
import { getMainData, getRecentData, getRecentDataByCategory } from './api/postApi';
>>>>>>> Stashed changes
import './App.css';

class App extends Component {

<<<<<<< Updated upstream
  render() {
    console.log(`App is being rendered.`);
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tech" component={Tech} />
          <Route exact path="/posts/:id" component={Post} />
        </Switch>
      </Router>
=======
  state = {
    page: 'Home',
    postCount: 0,
    mainPosts: [],
    recentPosts: []
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
    console.log(`Navigating to Article with _id: ${articleId}`);
    this.setState({
      page: 'Article',
      articleId: articleId
    });
  }
  
  openCategory = (category) => () => {
    console.log(`Navigating to Category: ${category}`);
    this.setState({
      page: 'Category',
      category: category
    });
    getRecentDataByCategory(category, 0, 9)
        .then((res) => {
            console.log(`res is here by category: ${category}`);
            this.setState({
                index: 0,
                recentPosts: res.data
            });
            console.log(`recentPosts and index updated. index: ${this.state.index} posts length: ${this.state.recentPosts.length}`);
        }).catch((error) => {
            console.log(error.response);
        });
  }
  
  updateRecentPage = (page, category, i, cap) => () => {
    console.log(`Navigating to Category: ${category}`);
    this.setState({
      page: page,
      category: category
    });
    if(category) {
      console.log(`Updating recents with category: ${category}, start: ${i*cap}, end: ${(i+1)*cap}`);
      getRecentDataByCategory(category, i * cap, (i + 1) * cap)
        .then((res) => {
            console.log(`res is here by category: ${category}`);
            this.setState({
                index: i,
                recentPosts: res.data
            });
            console.log(`recentPosts and index updated. index: ${this.state.index} posts length: ${this.state.recentPosts.length}`);
        }).catch((error) => {
            console.log(error.response);
        });
    } else {
      console.log(`Updating recents without category`);
      getRecentData(i * cap, (i + 1) * cap)
        .then((res) => {
            console.log(`res is NOT here by category`);
            this.setState({
                index: i,
                recentPosts: res.data
            });
            console.log(`recentPosts and index updated. index: ${this.state.index} posts length: ${this.state.recentPosts.length}`);
        }).catch((error) => {
            console.log(error.response);
        });
    }
  }

  home = () => {
    console.log(`home is being rendered.`);
    return (
      <div className="site-wrap">
        <Header navigate={this.updateRecentPage.bind(this)} />
        <Main mainPosts={this.state.mainPosts} openArticle={this.openArticle.bind(this)} />
        <Recent postCount={this.state.postCount} posts={this.state.recentPosts} openArticle={this.openArticle.bind(this)} paginate={this.updateRecentPage.bind(this)} />
        {/** <Random /> */}
        {/** <Newsletter /> */}
        <Footer />
      </div>
    );
  }
  
  category = () => {
    console.log(`category is being rendered.`);
    return (
      <div className="site-wrap">
        <Header navigate={this.updateRecentPage.bind(this)} />
        <CategoryDesc category={this.state.category} />
        <RecentByCategory postCount={this.state.postCount} posts={this.state.recentPosts} openArticle={this.openArticle.bind(this)} paginate={this.updateRecentPage.bind(this)} category={this.state.category} />
        <Footer />
      </div>
    );
  }
  
  article = () => {
    console.log(`Placeholder article is being rendered.`);
    return (
        <div className="site-wrap">
        <Header navigate={this.updateRecentPage.bind(this)} />
        <Article articleId={this.state.articleId} navigate={this.navigate.bind(this)} />
        {/** <Newsletter />*/}
        <Footer />
      </div>
>>>>>>> Stashed changes
    );
  }
}

<<<<<<< Updated upstream
const Tech = () => {
  console.log(`tech is being rendered.`);
  return (
    <div className="site-wrap">
      <Header />
      <div>Lorem ipsum</div>
      {/** <Newsletter /> */}
      <Footer />
    </div>
  );
}

const Post = () => {
  console.log(`article is being rendered.`);
  let { id } = useParams();
  return (
    <div className="site-wrap">
      <Header />
      <Article articleId={id} />
      {/** <Newsletter /> */}
      <Footer />
    </div>
  );
}

=======
  render() {
    console.log(`App is being rendered.`);
    switch (this.state.page) {
        case 'Home':
          return this.home();
        case 'Article':
          return this.article();
        default:
          return this.category();
      }
  }
}

>>>>>>> Stashed changes
export default App;