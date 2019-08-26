import React from 'react'
import PropTypes from 'prop-types'

const NormalBox = ({ post }) => (
    <a href="single.html" className="h-entry v-height gradient" style={{ backgroundImage: "url(" + post.illustration + ")" }}>
        <div className="text">
            <h2>{post.short}</h2>
            <span className="date">{post.date}</span>
        </div>
    </a>
)

const ExtensiveBox = ({ post }) => (
        <a href="single.html" className="h-entry img-5 h-100 gradient" style={{ backgroundImage: "url(" + post.illustration + ")" }}>
            <div className="text">
                <div className="post-categories mb-3">
                    <span className="post-category bg-danger">{post.tags[0]}</span>
                    <span className="post-category bg-primary">{post.tags[1]}</span>
                </div>
                <h2>{post.short}</h2>
                <span className="date">{post.date}</span>
            </div>
        </a>
)

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { mainPosts } = this.props
        return (
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row align-items-stretch retro-layout-2">
                        <div className="col-md-4">
                            <NormalBox post={mainPosts[0]} />
                            <NormalBox post={mainPosts[1]} />
                        </div>
                        <div className="col-md-4">
                            <ExtensiveBox post={mainPosts[2]} />
                        </div>
                        <div className="col-md-4">
                            <NormalBox post={mainPosts[3]} />
                            <NormalBox post={mainPosts[4]} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Main.propTypes = {
    mainPosts: PropTypes.array
}

export default Main