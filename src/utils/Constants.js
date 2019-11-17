var urls = {
    dev: {
        main: 'http://localhost:3000/',
        srv: 'http://localhost:8080/',
        media: 'http://localhost:8081/'
    }
}

export function getArticleImgUrlById(articleId, imgIndex) {
    console.log(urls.dev.media+"article/"+articleId+"/"+imgIndex+".jpg");
    return "url('"+urls.dev.media+"article/"+articleId+"/"+imgIndex+".jpg')";
}

export function getAuthorImgUrlById(id) {
    console.log(urls.dev.media+"author/"+id+".jpg");
    return urls.dev.media+"author/"+id+".jpg";
}