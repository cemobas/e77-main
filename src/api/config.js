export const nodeEnv = process.env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  uri: process.env.E77SRV_URI || `http://localhost:8080`,
  get serverUrl() {
    return `${this.uri}`;
  }
};
