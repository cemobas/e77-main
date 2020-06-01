const media = process.env.REACT_APP_E77MEDIA_URI || 'http://localhost:8081';

export function getArticleImgUrlById(articleId, imgIndex, unwrapped) {
    console.log(`${media}/posts/${articleId}_${imgIndex}.jpg`); // remove jpg, if endpoint is e77-media
    if(unwrapped) {
        return `${media}/posts/${articleId}_${imgIndex}.jpg`;
    }
    return `url('${media}/posts/${articleId}_${imgIndex}.jpg')`;
}

export function getAuthorImgUrlById(nickname) {
    console.log(`${media}/authors/${nickname}.jpg`);
    return `${media}/authors/${nickname}.jpg`;
}