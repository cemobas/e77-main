import React from 'react';
import PropTypes from 'prop-types'
import Comments from "./Comments";
import dateFormat from 'dateformat';
import { getArticle } from '../api/postApi'

class Article extends React.Component {
  
  state = {
    article: {}
  }

  componentDidMount() {
      getArticle(this.props.articleId)
          .then((res) => {
              console.log(`Retrieving the article with id: ${this.props.articleId}`);
              this.setState({
                  article: res.data
              });
          }).catch((error) => {
              console.log(error.response);
          });
  }

  render() {
    const article = this.state.article;
    return (
      <div>
        <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: "url('images/img_2.jpg')" }}>
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  <span className="post-category text-white bg-success mb-3">Nature</span>
                  <h1 className="mb-4"><a href="#">{article.title}</a></h1>
                  <div className="post-meta align-items-center text-center">
                    <span className="d-inline-block mt-1">By {article.author}</span>
                    <span>&nbsp;-&nbsp;{ dateFormat(article.date, "mmmm dS, yyyy") }</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="site-section py-lg">
          <div className="container">

            <div className="row blog-entries element-animate">

              <div className="col-md-12 col-lg-8 main-content">

                <div className="post-content-body">
                  {article.content}
                </div>

                <div className="pt-5">
                  <p>Categories:  <a href="#">Food</a>, <a href="#">Travel</a>  Tags: <a href="#">#manila</a>, <a href="#">#asia</a></p>
                </div>
                {/**<Comments />*/}

              </div>

              {/**END main-content*/}

              <div className="col-md-12 col-lg-4 sidebar">
                <div className="sidebar-box search-form-wrap">
                  <form action="#" className="search-form">
                    <div className="form-group">
                      <span className="icon fa fa-search"></span>
                      <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter" />
                    </div>
                  </form>
                </div>
                {/**END sidebar-box*/}
                <div className="sidebar-box">
                  <div className="bio text-center">
                    <img src="images/person_2.jpg" alt="Image Placeholder" className="img-fluid mb-5" />
                    <div className="bio-body">
                      <h2>Craig David</h2>
                      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                      <p><a href="#" className="btn btn-primary btn-sm rounded px-4 py-2">Read my bio</a></p>
                      <p className="social">
                        <a href="#" className="p-2"><span className="fa fa-facebook"></span></a>
                        <a href="#" className="p-2"><span className="fa fa-twitter"></span></a>
                        <a href="#" className="p-2"><span className="fa fa-instagram"></span></a>
                        <a href="#" className="p-2"><span className="fa fa-youtube-play"></span></a>
                      </p>
                    </div>
                  </div>
                </div>
                {/**END sidebar-box*/}
                <div className="sidebar-box">
                  <h3 className="heading">Popular Posts</h3>
                  <div className="post-entry-sidebar">
                    <ul>
                      <li>
                        <a href="">
                          <img src="images/img_1.jpg" alt="Image placeholder" className="mr-4" />
                          <div className="text">
                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/img_2.jpg" alt="Image placeholder" className="mr-4" />
                          <div className="text">
                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="images/img_3.jpg" alt="Image placeholder" className="mr-4" />
                          <div className="text">
                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                            <div className="post-meta">
                              <span className="mr-2">March 15, 2018 </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/**END sidebar-box*/}

                <div className="sidebar-box">
                  <h3 className="heading">Categories</h3>
                  <ul className="categories">
                    <li><a href="#">Food <span>(12)</span></a></li>
                    <li><a href="#">Travel <span>(22)</span></a></li>
                    <li><a href="#">Lifestyle <span>(37)</span></a></li>
                    <li><a href="#">Business <span>(42)</span></a></li>
                    <li><a href="#">Adventure <span>(14)</span></a></li>
                  </ul>
                </div>
                {/**END sidebar-box*/}

                <div className="sidebar-box">
                  <h3 className="heading">Tags</h3>
                  <ul className="tags">
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Adventure</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Freelancing</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Adventure</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Freelancing</a></li>
                  </ul>
                </div>
              </div>
              {/**END sidebar*/}

            </div>
          </div>
        </section>

        <div className="site-section bg-light">
          <div className="container">

            <div className="row mb-5">
              <div className="col-12">
                <h2>More Related Posts</h2>
              </div>
            </div>

            <div className="row align-items-stretch retro-layout">

              <div className="col-md-5 order-md-2">
                <a href="single.html" className="hentry img-1 h-100 gradient" style={{ backgroundImage: "url('images/img_4.jpg')" }}>
                  <span className="post-category text-white bg-danger">Travel</span>
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>
              </div>

              <div className="col-md-7">

                <a href="single.html" className="hentry img-2 v-height mb30 gradient" style={{ backgroundImage: "url('images/img_1.jpg')" }}>
                  <span className="post-category text-white bg-success">Nature</span>
                  <div className="text text-sm">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>

                <div className="two-col d-block d-md-flex">
                  <a href="single.html" className="hentry v-height img-2 gradient" style={{ backgroundImage: "url('images/img_2.jpg')" }}>
                    <span className="post-category text-white bg-primary">Sports</span>
                    <div className="text text-sm">
                      <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                      <span>February 12, 2019</span>
                    </div>
                  </a>
                  <a href="single.html" className="hentry v-height img-2 ml-auto gradient" style={{ backgroundImage: "url('images/img_3.jpg')" }}>
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
      </div>
    )
  }
}

Article.propTypes = {
  articleId: PropTypes.string,
  navigate: PropTypes.func
}

export default Article