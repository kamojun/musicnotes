const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
// const build = path.resolve(__dirname, 'build')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
});
