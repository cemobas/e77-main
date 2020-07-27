import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
/** import Random from "./components/Random";
import Newsletter from "./components/Newsletter"; */
import Footer from "./components/Footer";
import Article from "./components/Article";
import './App.css';

class App extends Component {

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
    );
  }
}

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

export default App;