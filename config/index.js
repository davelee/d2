const envConfig = {
  development: {
    port: 5001,
    publicPath: '/dist/',
  },
  production: {
    port: 5000,
    publicPath: '/dist/',
  }
};
module.exports = envConfig[process.env.NODE_ENV];
