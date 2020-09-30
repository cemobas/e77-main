import {urls} from './Constants.js';

export function getArticleImgUrl(articleId, imgIndex) {
    console.log(urls.dev.media+"article/"+articleId+"/"+imgIndex+".jpg");
    return "url('"+urls.dev.media+"article/"+articleId+"/"+imgIndex+".jpg')";
}

export function getArticleImgLink(articleId, imgIndex) {
    console.log(urls.dev.media+"article/"+articleId+"/"+imgIndex+".jpg");
    return urls.dev.media+"article/"+articleId+"/"+imgIndex+".jpg";
}

export function getAuthorImgUrl(id) {
    console.log(urls.dev.media+"author/"+id+".jpg");
    return urls.dev.media+"author/"+id+".jpg";
}