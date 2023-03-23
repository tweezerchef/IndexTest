// TODO

const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'build.js',
    path: path.resolve('./client', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

    ],

  },
};
