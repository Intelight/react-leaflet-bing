/* eslint-disable */
const path = require('path');
const DtsPlugin = require('dts-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, '/index.js')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,  
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '/build/'),
    filename: '[name].js',
    publicPath: 'http://localhost:8000/build'
  },
  devServer: {
    colors: true,
    contentBase: __dirname,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000,
    progress: true,
    stats: {
      cached: false
    }
  }
};