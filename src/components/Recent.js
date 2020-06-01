import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import { getRecentData } from '../api/postApi';
import { getArticleImgUrlById, getAuthorImgUrlById } from "../api/imageApi";

const Box = ({ post, openArticle }) => (
    <div className="col-lg-4 mb-4">
        <div className="entry2">
            <a key={post.index} onClick={openArticle(post.index)}>
                <img src={getArticleImgUrlById(post.index, 99, true)} alt={'img'+post.index} className="img-fluid rounded" />
            </a>
            <div className="excerpt">
                <span className="post-category text-white bg-secondary mb-3">{post.theme}</span>
                <h2><a key={post.index} onClick={openArticle(post.index)}>{post.title}</a></h2>
                <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left">
                        <img src={getAuthorImgUrlById(post.author)} alt="person_1" className="img-fluid" />
                    </figure>
                    <span className="d-inline-block mt-1">By <a href="#">{post.author}</a></span>
                    <span>&nbsp;-&nbsp; {dateFormat(post.date, "dddd, mmmm dS")}</span>
                </div>

                <p>{post.short}</p>
                <p><a key={post.index} className="btn btn-link text-info" onClick={openArticle(post.index)}>Read More</a></p>
            </div>
        </div>
    </div>
)

const Row = ({ posts, openArticle }) => (
    <div>
        <div className="row mb-5">
            <div className="col-12">
                <h2>Recent Posts</h2>
            </div>
        </div>
        <div className="row">
            {
                posts.map((post, i) => {
                    return (
                        <Box key={i} post={post} openArticle={openArticle} />
                    )
                })
            }
        </div>
    </div>
)

class Recent extends React.Component {

    state = {
        index: 0,
        cap: 9,
        posts: []
    }

    componentDidMount() {
        getRecentData(this.state.index * this.state.cap, (this.state.index + 1) * this.state.cap)
            .then((res) => {
                this.setState({
                    index: this.state.index,
                    posts: res.data,
                });
            }).catch((error) => {
                console.log(error.response);
            });
    }

    updateRecentPage = (i, cap) => () => {
        console.log(`data is being fetched with cap: ${cap}`);
        getRecentData(i * cap, 9)
            .then((res) => {
                this.setState({
                    index: i,
                    posts: res.data
                });
            }).catch((error) => {
                console.log(error.response);
            });
    }

    render() {
        const { postCount, openArticle } = this.props;
        return (
            <div className="site-section">
                <div className="container">
                    <Row posts={this.state.posts} openArticle={this.props.openArticle} />
                    <div className="row text-center pt-5 border-top">
                        <div className="col-md-12">
                            <div className="custom-pagination">
                                {
                                    Array.from(Array(Math.ceil(postCount / 9)), (e, i) =>
                                        i === this.state.index ? <span key={i}>{i + 1}</span> : <a key={i} onClick={this.updateRecentPage(i, this.state.cap)} style={{ color: "white" }}>{i + 1}</a>
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

Recent.propTypes = {
    cap: PropTypes.number
}

export default Recent