import config from './config';
import axios from 'axios';

const srvUri = config.uri.srv;

export const getMainData = () =>
  axios.get(`${srvUri}/posts`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getRecentData = (start, end) =>
  axios.get(`${srvUri}/latestPosts/${start}/${end}`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
<<<<<<< Updated upstream
export const getThemeData = () =>
  axios.get(`${srvUri}/themes`, {})
=======
export const getRecentDataByCategory = (category, start, end) => 
  axios.get(`${config.serverUrl}/latestPosts/${category}/${start}/${end}`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getCategoryData = () =>
  axios.get(`${config.serverUrl}/categories`, {})
>>>>>>> Stashed changes
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getArticle = (articleId) =>
  axios.get(`${srvUri}/posts/${articleId}`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getAuthor = (nickname) =>
  axios.get(`${srvUri}/authors/${nickname}`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
