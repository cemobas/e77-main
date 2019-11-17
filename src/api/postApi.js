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
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
  
export const getAuthor = (authorId) =>
  axios.get(`${config.serverUrl}/authors/${authorId}`, {})
    .then((res) => {
      return res;
  }).catch((error) => {
    console.log(error.response);
  });
