import React from 'react';
import PropTypes from 'prop-types'
import ArticleSide from "./ArticleSide";
import Comments from "./Comments";
import dateFormat from 'dateformat';
import { getArticle, getAuthor } from '../api/postApi'
import { getArticleImgUrlById } from "../utils/Constants.js"

const Categories = ({ tags }) => (
  <p>Categories:&nbsp;
    {
      tags.map((tag, i) => {
          console.log(`Tag ${tag} is being rendered.`);
          return (
              <span key={i}>{tag}{i<tags.length-1 ? ", " : ""}</span>
          );
      })
    }
  </p>
)

class Article extends React.Component {
  
  state = {
    article: {
      tags: []
    },
    author: {}
  }

  componentDidMount() {
      getArticle(this.props.articleId)
          .then((res) => {
              console.log(`Retrieving article with id: ${this.props.articleId}`);
              this.setState({
                  article: res.data
              });
              getAuthor(this.state.article.authorId)
                .then((res) => {
                    console.log(`Retrieving author with id: ${this.state.article.authorId}`);
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
    const navigate = this.props.navigate;

    return (
      <div>
        <div className="site-cover site-cover-sm same-height overlay single-page" style={{ backgroundImage: getArticleImgUrlById(article._id, 0) }}>
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
                  {article.content}
                </div>
                <div className="pt-5">
                  <Categories tags={article.tags} />
                </div>
                {/**<Comments />*/}
              </div>
              {/**END main-content*/}
              <ArticleSide article={article} author={author} navigate={navigate} />
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