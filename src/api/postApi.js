import config from './config';
import axios from 'axios';

export const getMainData = () =>
  axios.get(`${config.serverUrl}/posts`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getRecentData = (start, end) =>
  axios.get(`${config.serverUrl}/latestPosts/${start}/${end}`, {})
    .then((res) => {
      console.log(`Response is here for: ${config.serverUrl}/latestPosts/${start}/${end}`);
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getThemeData = () =>
  axios.get(`${config.serverUrl}/themes`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getArticle = (articleId) =>
  axios.get(`${config.serverUrl}/posts/${articleId}`, {})
    .then((res) => {
      console.log("postApi.js: Searching for article with articleId: " + articleId);
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getAuthor = (nickname) =>
  axios.get(`${config.serverUrl}/authors/${nickname}`, {})
    .then((res) => {
      console.log("postApi.js: Searching for nickname: " + nickname);
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
