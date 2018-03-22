process.env.NODE_ENV = 'development';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const config = require('../src/config');
const notifier = require('node-notifier');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const buildHelpers = require('./build_helpers');

// Dev - Restart server on changes
const startServerDev = _.once(function () {
  const nodemon = require('nodemon');
  nodemon({
    script: 'src/server/app.js',
    watch: ['src/server'],
    ignore: ['src/server/dist/manifest.json'],
    ext: 'js json',
    nodeArgs: ['--inspect']
  });

  nodemon.once('start', function () {
    notifier.notify({ title: 'Server Started!', message: config.appUrl });
  }).on('start', function () {
    console.log(`Server started: ${config.appUrl}`);
  }).on('restart', function (files) {
    console.log('Server restarted due to: ', files);
  }).on('quit', function () {
    process.exit(0); // Some weirdness seems to happen without this (at least on linux)
  });
});

// Dev Mode - We watch for changes and restart server
webpack(webpackConfig).watch({}, function (err, stats) {
  // if (err) { Fatal Error?? }
  if (stats.hasErrors()) {
    notifier.notify({ title: 'Error', message: 'Error bundling, see console.' });
  }
  buildHelpers.logWebpackOutput(stats);
  startServerDev();
});
