import React from 'react';
import PropTypes from 'prop-types';
import { getRecentData } from '../api/postApi'

const Box = ({ post }) => (
    <div className="col-lg-4 mb-4">
        <div className="entry2">
            <a href="single.html">
                <img src={post.illustration} alt="img_1" className="img-fluid rounded" />
            </a>
            <div className="excerpt">
                <span className="post-category text-white bg-secondary mb-3">{post.theme}</span>

                <h2><a href="single.html">{post.title}</a></h2>
                <div className="post-meta align-items-center text-left clearfix">
                    <figure className="author-figure mb-0 mr-3 float-left">
                        <img src="images/person_1.jpg" alt="person_1" className="img-fluid" />
                    </figure>
                    <span className="d-inline-block mt-1">By <a href="#">{post.author}</a></span>
                    <span>&nbsp;-&nbsp; {post.date}</span>
                </div>

                <p>{post.short}</p>
                <p><a href="#">Read More</a></p>
            </div>
        </div>
    </div>
)

const Row = ({ posts }) => (
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
                        <Box key={i} post={post} />
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
        console.log("data is being fetched ...");
        getRecentData(i * cap, (i + 1) * cap)
            .then((res) => {
                console.log("res is here ...");
                this.setState({
                    index: i,
                    posts: res.data
                });
                console.log("posts and index updated. index: " + this.state.index + " posts length: " + this.state.posts.length);
            }).catch((error) => {
                console.log(error.response);
            });
    }

    render() {
        const { postCount } = this.props;
        return (
            <div className="site-section">
                <div className="container">
                    <Row posts={this.state.posts} />
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