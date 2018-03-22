const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const DEPLOY_ENV = process.env.DEPLOY_ENV;
const isDev = (NODE_ENV === 'development');
const isProd = (NODE_ENV === 'production');
const appConfig = require('./src/config');

// Common stuff used in both regular config and test only
const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(NODE_ENV),
    IS_BROWSER: true
  }
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: ['./client/init_app.js'],
    vendor: [
      'babel-polyfill',
      'whatwg-fetch',
      'react',
      'react-dom',
      'react-router'
      // Uncomment if you end up using these in your app
      // 'moment',
      // 'moment-timezone',
      // 'react-dates'
    ]
  },
  resolve: {
    symlinks: isProd,
    alias: {
      fs: path.resolve(__dirname, 'node_modules/browserify-fs'),
    },
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/client'),
      'node_modules'
    ],
    extensions: ['.jsx', '.js', 'json']
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'webpack_loaders'), 'node_modules']
  },
  output: {
    publicPath: appConfig.publicPath,
    path: path.join(__dirname, 'dist'),
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
    pathinfo: !isProd
  },
  plugins: [
    definePlugin,
    new CleanWebpackPlugin(['dist/**/*', 'src/server/dist/**/*']),
    new ManifestPlugin({
      fileName: '../src/server/dist/manifest.json',
      publicPath: appConfig.publicPath
    }),
    new CopyWebpackPlugin([
      {
        from : path.join(__dirname, 'src/common/**/*'),
        to: path.join(__dirname, 'src/server/dist' )
      },
      {
        ignore: DEPLOY_ENV ? [] : ['config.local.js'],
        from : path.join(__dirname, 'src/config/**/*'),
        to: path.join(__dirname, 'src/server/dist')
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
  devtool: isProd ? undefined : 'eval',
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
      },
      {
        include: path.resolve(__dirname, 'src/config'),
        loader: 'config-loader',
        options: {
          whitelistedKeys: ['appUrl', 'publicPath']
        }
      }
    ]
  },
};
