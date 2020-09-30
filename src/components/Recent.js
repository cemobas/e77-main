import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import { Link } from "react-router-dom";
import { getRecentData } from '../api/postApi';
<<<<<<< Updated upstream
import { getArticleImgUrlById, getAuthorImgUrlById } from "../api/imageApi";
=======
import { getArticleImgLink, getAuthorImgUrl } from "../utils/ImageFetcher.js";
>>>>>>> Stashed changes

const Box = ({ post }) => (
    <div className="col-lg-4 mb-4">
        <div className="entry2">
<<<<<<< Updated upstream
            <Link to={'/posts/'+post.index}>
                <img src={getArticleImgUrlById(post.index, 99, true)} alt={'img'+post.index} className="img-fluid rounded" />
            </Link>
            <div className="excerpt">
                <span className="post-category text-white bg-secondary mb-3">{post.theme}</span>
                
                <Link to={'/posts/'+post.index}><h2>{post.title}</h2></Link>
                
                <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left">
                        <img src={getAuthorImgUrlById(post.author)} alt="{post.author}" className="img-fluid" />
=======
            <a key={'img_'+i} onClick={navigate(post._id)}>
                <img src={getArticleImgLink(post._id, 99)} alt={'img_'+i} className="img-fluid rounded" />
            </a>
            <div className="excerpt">
                <span className="post-category text-white bg-secondary mb-3">{post.category}</span>

                <h2><a key={'title_'+i} onClick={navigate(post._id)}>{post.title}</a></h2>
                <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left">
                        <img src={getAuthorImgUrl(post.authorId)} alt="person_1" className="img-fluid" />
>>>>>>> Stashed changes
                    </figure>
                    <span className="d-inline-block mt-1">By <a href="#">{post.author}</a></span>
                    <span>&nbsp;-&nbsp; {dateFormat(post.date, "dddd, mmmm dS")}</span>
                </div>

                <p>{post.short}</p>
                <p>
                    <Link to={'/posts/'+post.index}>Read More</Link>
                </p>
            </div>
        </div>
    </div>
)

const Row = ({ posts }) => (
    <div>
        <div className="row mb-5">
            <div className="col-12">
                <h2>Recent Posts with {posts.length}</h2>
            </div>
        </div>
        <div className="row">
            {
                posts.map((post, i) => {
                    return (
<<<<<<< Updated upstream
                        <Box key={i} post={post} />
=======
                        <Box key={i} i={i} post={post} navigate={navigate} />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
        let i = this.state.index;
        let cap = this.state.cap;
        console.log(`Updating recents without category`);
        getRecentData(i * cap, (i + 1) * cap)
            .then((res) => {
                console.log(`res is NOT here by category : ${res.data.length}`);
>>>>>>> Stashed changes
                this.setState({
                    index: i,
                    posts: res.data
                });
<<<<<<< Updated upstream
=======
                console.log(`recent posts and index updated. index: ${this.state.index} posts length: ${this.state.posts.length}`);
>>>>>>> Stashed changes
            }).catch((error) => {
                console.log(error.response);
            });
    }

    render() {
<<<<<<< Updated upstream
        const { postCount } = this.props;
=======
        const { postCount, posts, openArticle, paginate } = this.props;
>>>>>>> Stashed changes
        return (
            <div className="site-section">
                <div className="container">
                    <Row posts={this.state.posts} />
                    <div className="row text-center pt-5 border-top">
                        <div className="col-md-12">
                            <div className="custom-pagination">
                                {
                                    Array.from(Array(Math.ceil(postCount / 9)), (e, i) =>
                                        i === this.state.index ? <span key={i}>{i + 1}</span> : <a key={i} onClick={paginate('Home', '', i, this.state.cap)} style={{ color: "white" }}>{i + 1}</a>
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
<<<<<<< Updated upstream
    cap: PropTypes.number
=======
    cap: PropTypes.number,
    posts: PropTypes.array,
    openArticle: PropTypes.func,
    paginate: PropTypes.func,
>>>>>>> Stashed changes
}

export default Recent