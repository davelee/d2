const _ = require('lodash');
const deployEnv = process.env.DEPLOY_ENV;

const envConfig = {
  /****************** DEV ******************/
  dev: {
    port: 3030,
    appUrl: 'https://dev.davelee.io:3030',
    publicPath: 'https://dev.davelee.io:3030/dist/',
  },

  /****************** PROD ******************/
  prod: {
    port: 5000,
    appUrl: 'https://davelee.io:5000',
    publicPath: 'https://dbi8pdtt914h2.cloudfront.net/',
    deploy: {
      s3Location: 's3://davelee.io-static',
      invalidationId: 'ESP6EKJ0JPBUY'
    },
  }
};

//****************** COMMON ******************//
const baseConfig = {
};

if (process.env.IS_BROWSER || typeof window !== 'undefined') {
  throw new Error('Config should be required through webpack loader, see webpack config');
}

if (!(deployEnv in envConfig)) {
  throw new Error(`Environment from process.env.DEPLOY_ENV=${deployEnv} not found in environmental config`);
}

if (deployEnv === 'dev') {
  try {
    envConfig.local = _.merge(envConfig.local, require('./config.local.js'));
  } catch (e) {}
}

module.exports = _.merge({}, baseConfig, envConfig[deployEnv]);
