process.env.NODE_ENV = 'development';

const _ = require('lodash');
const config = require('../config');
const notifier = require('node-notifier');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const startServerDev = _.once(function () {
  const nodemon = require('nodemon');
  nodemon({
    script: 'api/app.js',
    watch: ['api'],
    ignore: ['api/dist/manifest.json'],
    ext: 'js json',
    nodeArgs: ['--inspect']
  });

  nodemon.once('start', function () {
    notifier.notify({ title: 'api started!', message: config.port });
  }).on('start', function () {
    notifier.notify({ title: 'api started!', message: config.port });
  }).on('restart', function (files) {
    notifier.notify({title: 'api restarted!'});
  }).on('quit', function () {
    process.exit(0);
  });
});

webpack(webpackConfig).watch({}, function (err, stats) {
  if (stats.hasErrors()) {
    notifier.notify({ title: 'Error', message: 'Error bundling, see console.' });
  }
  startServerDev();
});
