const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const isProd = (NODE_ENV === 'production');
const appConfig = require('./config');

module.exports = {
  context: __dirname,
  entry: {
    app: ['./client/init_app.js'],
    vendor: [
      'babel-polyfill',
      'whatwg-fetch',
      'react',
      'react-dom',
      'react-router'
    ]
  },
  resolve: {
    symlinks: isProd,
    alias: {
      fs: path.resolve(__dirname, 'node_modules/browserify-fs'),
    },
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'client'),
      'node_modules'
    ],
    extensions: ['.jsx', '.js', 'json']
  },
  resolveLoader: {
    modules: ['node_modules']
  },
  output: {
    publicPath: appConfig.publicPath,
    path: path.join(__dirname, 'dist'),
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
    pathinfo: !isProd
  },
  plugins: [
    new CleanWebpackPlugin(['dist/**/*', 'api/dist/**/*']),
    new ManifestPlugin({
      fileName: '../api/dist/manifest.json',
      publicPath: appConfig.publicPath
    }),
    new CopyWebpackPlugin([
      {
        from : path.join(__dirname, 'config/**/*'),
        to: path.join(__dirname, 'api/dist')
      }
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: isProd ? 'vendor.[chunkhash].js' : 'vendor.js'
    }),
    new ExtractTextPlugin({
      filename: isProd ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  devtool: isProd ? undefined : 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: path.resolve('./.tmp'),
          retainLines: true,
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader?sourceMap' },
            { loader: 'sass-loader?sourceMap' }
          ],
          fallback: 'style-loader'
        }),
      },
      {
        test: /\.(swf|png|jpg|gif|svg|ttf|eot|woff|woff2?)$/,
        loader: 'file-loader',
        options: {
          name: isProd ? '[name].[hash].[ext]' : '[path][name].[ext]'
        }
      }
    ]
  }
};
