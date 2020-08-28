const path = require('path');

/* eslint-disable */
module.exports = {
  output: {
    library: 'ReactLeaflet',
    libraryTarget: 'umd',
    filename: 'react-leaflet-bing.js',
    path: path.resolve(__dirname, 'dist')
  },
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  externals: [
    {
      leaflet: {
        amd: 'leaflet',
        commonjs: 'leaflet',
        commonjs2: 'leaflet',
        root: 'L'
      }
    },
    {
      'react-leaflet': {
        amd: 'react-leaflet',
        commonjs: 'react-leaflet',
        commonjs2: 'react-leaflet'
      }
    },
    {
      react: {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    }
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules/, 
        use: ['ts-loader']
      }
    ]
  }
};

