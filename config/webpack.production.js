const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname,'/../', 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
      new HtmlWebpackPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname,'/../', 'src')
    },
      {
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          test: /\.scss$/
      }
    ]
  }
};