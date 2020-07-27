import React from 'react';
import PropTypes from 'prop-types'
import ArticleSide from "./ArticleSide";
/** import Comments from "./Comments"; */
/** import Related from "./Related"; */
import dateFormat from 'dateformat';
import { getArticle, getAuthor } from '../api/postApi';
import { getArticleImgUrlById } from "../api/imageApi";
import { addImages } from "../utils/textOps";

const RelCategories = ({ tags }) => (
  <p>Categories:&nbsp;
    {
      tags.map((tag, i) => {
          return (
              <span key={i}>{tag}{i<tags.length-1 ? ", " : ""}</span>
          );
      })
    }
  </p>
)

class Article extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      article: {
        tags: []
      },
      author: {}
    }
  }

  componentDidMount() {
      getArticle(this.props.articleId)
          .then((res) => {
              this.setState({
                  article: res.data
              });
              getAuthor(this.state.article.author)
                .then((res) => {
                    this.setState({
                        author: res.data
                    });
                }).catch((error) => {
                    console.log(error.response);
                });
          }).catch((error) => {
              console.log(error.response);
          });
  }

  render() {
    const article = this.state.article;
    const author = this.state.author;

    return (
      <div>
        <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: getArticleImgUrlById(article.index, 99) }}>
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  <span className="post-category text-white bg-success mb-3">{article.theme}</span>
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
                  {addImages(article.index, new String(article.content))}
                </div>
                <div className="pt-5">
                  <RelCategories tags={article.tags} />
                </div>
                {/**<Comments />*/}
              </div>
              {/**END main-content*/}
              <ArticleSide article={article} author={author} />
            </div>
          </div>
        </section>
        {/**<Related />*/}
      </div>
    )
  }
}

Article.propTypes = {
  articleId: PropTypes.string
}

export default Article