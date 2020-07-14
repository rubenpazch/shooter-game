const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'project.bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /'node_modules'/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.gif$/, loader: 'url-loader' },
      { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
  ],
};