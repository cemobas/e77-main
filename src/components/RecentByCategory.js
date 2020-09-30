import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import { getRecentDataByCategory } from '../api/postApi';
import { getArticleImgLink, getAuthorImgUrl } from "../utils/ImageFetcher.js";

const Box = ({ i, post, navigate }) => (
    <div className="col-lg-4 mb-4">
        <div className="entry2">
            <a key={'img_'+i} onClick={navigate(post._id)}>
                <img src={getArticleImgLink(post._id, 99)} alt={'img_'+i} className="img-fluid rounded" />
            </a>
            <div className="excerpt">
                <span className="post-category text-white bg-secondary mb-3">{post.category}</span>

                <h2><a key={'title_'+i} onClick={navigate(post._id)}>{post.title}</a></h2>
                <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left">
                        <img src={getAuthorImgUrl(post.authorId)} alt="person_1" className="img-fluid" />
                    </figure>
                    <span className="d-inline-block mt-1">By {post.author}</span>
                    <span className="date">&nbsp;-&nbsp; { dateFormat(post.date, "dddd, mmmm dS") }</span>
                </div>

                <p>{post.short}</p>
                <p><a key={'readmore_'+i} onClick={navigate(post._id)}>Read More</a></p>
            </div>
        </div>
    </div>
)

const Row = ({ posts, navigate }) => (
    <div>
        <div className="row">
            {
                posts.map((post, i) => {
                    return (
                        <Box i={i} post={post} navigate={navigate} />
                    )
                })
            }
        </div>
    </div>
)

class RecentByCategory extends React.Component {

    state = {
        index: 0,
        cap: 9,
        posts: []
    }

    componentDidMount() {
        let category = this.props.category;
        console.log(`Component did mount as ${category}`);
        getRecentDataByCategory(category, this.state.index * this.state.cap, (this.state.index + 1) * this.state.cap)
            .then((res) => {
                this.setState({
                    index: this.state.index,
                    posts: res.data,
                });
            }).catch((error) => {
                console.log(error.response);
            });
    }

    render() {
        console.log(`Recent by category '${this.props.category}' is rendering...`);
        const { postCount, posts, openArticle, paginate, category } = this.props;
        this.state.posts = posts;
        return (
            <div className="site-section">
                <div className="container">
                    <Row posts={this.state.posts} navigate={openArticle} />
                    <div className="row text-center pt-5 border-top">
                        <div className="col-md-12">
                            <div className="custom-pagination">
                                {
                                    Array.from(Array(Math.ceil(postCount / 9)), (e, i) =>
                                        i === this.state.index ? <span key={i}>{i + 1}</span> : <a key={i} onClick={paginate('Category', category, i, this.state.cap)} style={{ color: "white" }}>{i + 1}</a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

RecentByCategory.propTypes = {
    cap: PropTypes.number,
    posts: PropTypes.array,
    openArticle: PropTypes.func,
    paginate: PropTypes.func,
    category: PropTypes.string
}

export default RecentByCategory