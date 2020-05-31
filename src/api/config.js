const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  uri: env.E77SRV_URI || `http://localhost:8080`,
  get serverUrl() {
    return `${this.uri}`;
  }
};
