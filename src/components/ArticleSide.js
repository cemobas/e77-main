import React from 'react';
<<<<<<< Updated upstream
import PropTypes from 'prop-types';
/** import Popular from "./Popular"; */
/** import Categories from "./Categories"; */
/** import Tags from "./Tags"; */
import { getAuthorImgUrlById } from "../api/imageApi";
=======
import PropTypes from 'prop-types'
import { getAuthorImgUrl } from "../utils/ImageFetcher.js"
import PopularPosts from "./PopularPosts"
import Categories from "./Categories"
import Tags from "./Tags"
>>>>>>> Stashed changes

class ArticleSide extends React.Component {

  render() {
    const {article, author} = this.props;
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
<<<<<<< Updated upstream
              <img src={getAuthorImgUrlById(author.nickname)} alt={author.nickname} className="img-fluid mb-5" />
=======
              <img src={getAuthorImgUrl(author._id)} alt="Image Placeholder" className="img-fluid mb-5" />
>>>>>>> Stashed changes
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
          {/** <Popular /> */}
          {/**END sidebar-box*/}
          {/** <Categories /> */}
          {/**END sidebar-box*/}
          {/** <Tags /> */}
        </div>
    )
  }
}

ArticleSide.propTypes = {
  article: PropTypes.object,
  author: PropTypes.object
}

export default ArticleSide