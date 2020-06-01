import config from './config';
// import {logStars} from './config.js';

const mediaUri = config.uri.media;

export function getArticleImgUrlById(articleId, imgIndex, unwrapped) {
    // logStars(`${mediaUri}/posts/${articleId}_${imgIndex}.jpg`); // remove jpg, if endpoint is e77-media
    if(unwrapped) {
        return `${mediaUri}/posts/${articleId}_${imgIndex}.jpg`;
    }
    return `url('${mediaUri}/posts/${articleId}_${imgIndex}.jpg')`;
}

export function getAuthorImgUrlById(nickname) {
    // logStars(`${mediaUri}/authors/${nickname}.jpg`);
    return `${mediaUri}/authors/${nickname}.jpg`;
}