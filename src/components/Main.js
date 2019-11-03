import React from 'react'
import PropTypes from 'prop-types'
import dateFormat from 'dateformat';

const NormalBox = ({ id, post, className, openArticle }) => (
    <a key={id} onClick={openArticle(post._id)} className={className} style={{ backgroundImage: "url(" + post.illustration + ")" }}>
        <div className="text">
            <h2>{post.short}</h2>
            <span className="date">{ dateFormat(post.date, "dddd, mmmm dS") }</span>
        </div>
    </a>
)

const ExtensiveBox = ({ id, post, openArticle }) => (
    <a key={id} onClick={openArticle(post._id)} className="h-entry img-5 h-100 gradient" style={{ backgroundImage: "url(" + post.illustration + ")" }}>
        <div className="text">
            <div className="post-categories mb-3">
                <span className="post-category bg-danger">{post.tags[0]}</span>
                <span className="post-category bg-primary">{post.tags[1]}</span>
            </div>
            <h2>{post.short}</h2>
            <span className="date">{ dateFormat(post.date, "dddd, mmmm dS") }</span>
        </div>
    </a>
)

class Main extends React.Component {

    render() {
        const { mainPosts, openArticle } = this.props;
        return (
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row align-items-stretch retro-layout-2">
                        <div className="col-md-4">
                            {
                                mainPosts.slice(0, 2).map((p, i) => {
                                    return <NormalBox id={7*(i+1)} key={7*(i+1)} post={p} className={"h-entry " + (i % 2 === 0 ? "mb-30 " : " ") + "v-height gradient"} openArticle={openArticle} />
                                })
                            }
                        </div>
                        <div className="col-md-4">
                            {
                                mainPosts.slice(2, 3).map((p, i) => {
                                    return <ExtensiveBox id={13*(i+1)} key={13*(i+1)} post={p} openArticle={openArticle} />
                                })
                            }
                        </div>
                        <div className="col-md-4">
                            {
                                mainPosts.slice(3, 5).map((p, i) => {
                                    return <NormalBox id={23*(i+1)} key={23*(i+1)} post={p} className={"h-entry " + (i % 2 === 0 ? "mb-30 " : " ") + "v-height gradient"} openArticle={openArticle} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Main.propTypes = {
    mainPosts: PropTypes.array,
    openArticle: PropTypes.func
}

export default Main