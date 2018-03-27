process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const exec = require('child_process').exec;
const buildHelpers = require('./build_helpers');
const webpackConfig = require('../webpack.config.js');

const DEPLOY_ENV = process.env.DEPLOY_ENV;
const config = require('../src/config');

const execPromise = (command, options) => {
  return new Promise((resolve, reject) => {
    const cmd = exec(command, options, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      resolve({stdout, stderr});
    });

    cmd.stdout.on('data', (data) => {
      console.log(data);
    });

    cmd.stderr.on('data', (data) => {
      console.log(data);
    })
  });
};

const webpackPromise = () => {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      buildHelpers.logWebpackOutput(stats);
      if (stats.hasErrors()) {
        return reject('Webpack bundle error');
      }
      resolve();
    });
  })
};

const yarnInstall = (cwd) => {
  return execPromise('yarn install', {
    cwd: cwd,
    env: Object.assign({}, process.env, {
      NODE_ENV: 'not_production'
    })
  })
};

// Re-install dependencies
yarnInstall()
  // Re-install server dependencies
  .then(() => {
    return yarnInstall('src/server')
  })

  // Bundle static assets
  .then(webpackPromise)

  //Remove old static assets
  .then(() => {
    return execPromise(`aws s3 rm ${config.deploy.s3Location} --recursive`)
  })

  // Upload new static assets
  .then(() => {
    return execPromise(
      `aws s3 cp dist/ ${config.deploy.s3Location} ` +
        `--recursive ` +
        `--exclude ".*" ` +
        `--cache-control "public, max-age=31536000" `
    );
  })
  //invalid cloudfront
  .then(()=>{
    return execPromise(
      `aws cloudfront create-invalidation --distribution-id ${config.deploy.invalidationId} --paths '/*'`
    );
  })

  // Catch all and log
  .catch((err) => {
    console.log('Deploy failed because of ' + err);
  });
