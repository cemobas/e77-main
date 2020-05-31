 /** import config from './config'; */
import axios from 'axios';

const uri = process.env.REACT_APP_E77SRV_URI || 'http://localhost:8089';

export const getMainData = () =>
  axios.get(`${uri}/posts`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getRecentData = (start, end) =>
  axios.get(`${uri}/latestPosts/${start}/${end}`, {})
    .then((res) => {
      console.log(`Response is here for: ${uri}/latestPosts/${start}/${end}`);
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getThemeData = () =>
  axios.get(`${uri}/themes`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getArticle = (articleId) =>
  axios.get(`${uri}/posts/${articleId}`, {})
    .then((res) => {
      console.log("postApi.js: Searching for article with articleId: " + articleId);
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getAuthor = (nickname) =>
  axios.get(`${uri}/authors/${nickname}`, {})
    .then((res) => {
      console.log("postApi.js: Searching for nickname: " + nickname);
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
