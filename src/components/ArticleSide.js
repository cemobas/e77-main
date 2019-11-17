import React from 'react';
import PropTypes from 'prop-types'
import { getAuthorImgUrlById } from "../utils/Constants.js"

class ArticleSide extends React.Component {
  
  state = {
    article: {
      tags: []
    }
  }

  render() {
    const {article, author, navigate} = this.props;
    return (
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
              <img src={getAuthorImgUrlById(author._id)} alt="Image Placeholder" className="img-fluid mb-5" />
              <div className="bio-body">
                <h2>{author.name} {author.surname}</h2>
                <p className="mb-4">{author.shortBio}</p>
                {/**<p><a href="#" className="btn btn-primary btn-sm rounded px-4 py-2">Read my bio</a></p>*/}
                <p className="social">
                  {author.twitter && (
                    <a href={author.twitter} className="p-2"><span className="fa fa-twitter"></span></a>
                  )}
                  {author.facebook && (
                    <a href={author.facebook} className="p-2"><span className="fa fa-facebook"></span></a>
                  )} 
                  {author.instagram && (
                    <a href={author.instagram} className="p-2"><span className="fa fa-instagram"></span></a>
                  )}
                  {author.youtube && (
                    <a href={author.youtube} className="p-2"><span className="fa fa-youtube"></span></a>
                  )}
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
    )
  }
}

ArticleSide.propTypes = {
  article: PropTypes.object,
  author: PropTypes.object,
  navigate: PropTypes.func
}

export default ArticleSide