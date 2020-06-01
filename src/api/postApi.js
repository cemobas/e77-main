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
  
export const getThemeData = () =>
  axios.get(`${srvUri}/themes`, {})
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
