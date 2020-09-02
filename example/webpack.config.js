/* eslint-disable */
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './index.tsx'
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,  
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: 'http://localhost:8000/build'
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    historyApiFallback: true,
    port: 8000,
  }
};