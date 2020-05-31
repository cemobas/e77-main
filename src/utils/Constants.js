var media = process.env.E77MEDIA_URI || `http://localhost:8081`;

export function getArticleImgUrlById(articleId, imgIndex, unwrapped) {
    console.log(media+"posts/"+articleId+"/"+imgIndex);
    if(unwrapped) {
        return media+"posts/"+articleId+"/"+imgIndex;
    }
    return "url('"+media+"posts/"+articleId+"/"+imgIndex+"')";
}

export function getAuthorImgUrlById(nickname) {
    console.log(media+"authors/"+nickname);
    return media+"authors/"+nickname;
}