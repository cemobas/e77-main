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
