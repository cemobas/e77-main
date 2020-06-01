const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

export default {
  uri: {
    srv: env.REACT_APP_E77SRV_URI || 'http://localhost:8080',
    media: env.REACT_APP_E77MEDIA_URI || 'http://localhost:8081'
  },
  get serverUri() {
    return `${this.uri}`;
  }
};
