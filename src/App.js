import React, {Component} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Recent from "./components/Recent";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  trends = [{"title": "Home", "link": "home.html"}, {"title": "Literature", "link": "literature.html"}]
  mainPosts = [
    {"title": "Trump sert çıktı!", "theme": "Politics", "short": "Trump muthis bir adam, diye soze baslayan Macron, konusmanin gerisinde zehir zemberek konustu.", "illustration": "images/trump.jpg", "date": "2019-12-12", "tags": ["trump", "abd"]},
    {"title": "React is brillant", "theme": "Technology", "short": "React is so great that you can build websites in about ten minutes!", "illustration": "images/react.jpg", "date": "2019-12-11", "tags": ["react", "js"]},
    {"title": "Koltuk almak zor iş", "theme": "Furniture", "short": "Bugün mobilya dünyasında büyük bir kaos var, koltuk almak için yüz elli dükkan dolaşıyoruz.", "illustration": "images/koltuk.jpg", "date": "2019-12-10", "tags": ["koltuk", "mobilya"]},
    {"title": "TV bakıyoruz...", "theme": "Electronics", "short": "Film izlemek, dizi izlemek için farklı TVler almanız gerekebilir.", "illustration": "images/television.jpg", "date": "2019-12-09", "tags": ["hd", "tv"]},
    {"title": "Master Chef'te skandal", "theme": "Entertainment", "short": "Ünlü yemek programında dün akşam yaşananlar utanç vericiydi.", "illustration": "images/chef.jpg", "date": "2019-12-08", "tags": ["master chef", "cullinary"]}
  ];
  render() {
    return (
      <div className="site-wrap">
        
        <Header trends={this.trends} />
        <Main mainPosts={this.mainPosts} />
        <Recent recentPosts={this.mainPosts} />
        
        <div className="site-section bg-light">
          <div className="container">

            <div className="row align-items-stretch retro-layout">
              
              <div className="col-md-5 order-md-2">
                <a href="single.html" className="hentry img-1 h-100 gradient" style={{backgroundImage: "url('images/img_4.jpg')"}}>
                  <span className="post-category text-white bg-danger">Travel</span>
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>
              </div>

              <div className="col-md-7">
                
                <a href="single.html" className="hentry img-2 v-height mb30 gradient" style={{backgroundImage: "url('images/img_1.jpg')"}}>
                  <span className="post-category text-white bg-success">Nature</span>
                  <div className="text text-sm">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>
                
                <div className="two-col d-block d-md-flex">
                  <a href="single.html" className="hentry v-height img-2 gradient" style={{backgroundImage: "url('images/img_2.jpg')"}}>
                    <span className="post-category text-white bg-primary">Sports</span>
                    <div className="text text-sm">
                      <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                      <span>February 12, 2019</span>
                    </div>
                  </a>
                  <a href="single.html" className="hentry v-height img-2 ml-auto gradient" style={{backgroundImage: "url('images/img_3.jpg')"}}>
                    <span className="post-category text-white bg-warning">Lifestyle</span>
                    <div className="text text-sm">
                      <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                      <span>February 12, 2019</span>
                    </div>
                  </a>
                </div>  
                
              </div>
            </div>

          </div>
        </div>


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
        
        
        <div className="site-footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-4">
                <h3 className="footer-heading mb-4">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
              </div>
              <div className="col-md-3 ml-auto">
                <ul className="list-unstyled float-left mr-5">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Advertise</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Subscribes</a></li>
                </ul>
                <ul className="list-unstyled float-left">
                  <li><a href="#">Travel</a></li>
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Sports</a></li>
                  <li><a href="#">Nature</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                

                <div>
                  <h3 className="footer-heading mb-4">Connect With Us</h3>
                  <p>
                    <a href="#"><span className="icon-facebook pt-2 pr-2 pb-2 pl-0"></span></a>
                    <a href="#"><span className="icon-twitter p-2"></span></a>
                    <a href="#"><span className="icon-instagram p-2"></span></a>
                    <a href="#"><span className="icon-rss p-2"></span></a>
                    <a href="#"><span className="icon-envelope p-2"></span></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <p>
                  Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
