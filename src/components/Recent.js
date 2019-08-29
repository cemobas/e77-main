import React from 'react'
import PropTypes from 'prop-types'

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
                posts.map((post) => {
                    return (
                        <Box post={post} />
                    )
                })
            }
        </div>
    </div>
)

class Recent extends React.Component {

    componentDidMount() {
        this.setState({
            index: this.props.index
        });
    }

    updateRecentPage = (i, last) => () => {
        this.setState({
            index: i
        });
    }

    render() {
        const { index, posts, postCount } = this.props;
        return (
            <div className="site-section">
                <div className="container">
                    <Row posts={posts} />
                    <div className="row text-center pt-5 border-top">
                        <div className="col-md-12">
                            <div className="custom-pagination">
                                {
                                    Array.from(Array(Math.ceil(postCount / 9)), (e, i) => 
                                        i === this.state.index ? <span>{i + 1}</span> : <a onClick={this.updateRecentPage(i)} style={{ color: "white" }}>{i + 1}</a>
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
    index: PropTypes.number,
    posts: PropTypes.array,
    postCount: PropTypes.number
}

export default Recent