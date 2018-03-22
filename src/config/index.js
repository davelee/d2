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
    appUrl: 'https://davelee.io',
    publicPath: 'https://davelee.io/',
  }
};

//****************** COMMON ******************//
const baseConfig = {
};

if (process.env.IS_BROWSER || typeof window !== 'undefined') {
  throw new Error('Config should be required through webpack loader, see webpack config');
}

// Make sure it's a valid deploy env
if (!(deployEnv in envConfig)) {
  throw new Error(`Environment from process.env.DEPLOY_ENV=${deployEnv} not found in environmental config`);
}

// Check for local overrides
if (deployEnv === 'dev') {
  try {
    envConfig.local = _.merge(envConfig.local, require('./config.local.js'));
  } catch (e) {}
}

module.exports = _.merge({}, baseConfig, envConfig[deployEnv]);
