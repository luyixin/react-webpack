/*
* created by lu.yixin on 2018/02/22
*/

const webpack = require('webpack')
const path = require('path')
const loader = require('./webpack.loader.js')
const plugins = require('./webpack.plugins.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
loader.rules.push({
  test: /\.(less|css)$/,
  use: ['style-loader', 'css-loader', 'less-loader']
})

plugins.push(new webpack.HotModuleReplacementPlugin())
plugins.push(new webpack.BannerPlugin('Develop environment created by lu.yixin <410780496@qq.com> on 2018/02/09'))

module.exports = {
  entry: {
    build: resolve('src') + '/main.js'
  },
  output: {
    filename: '[name].[hash:6].js',
    chunkFilename: '[chunkhash].[hash:6].js',
    path: resolve('dist')
  },
   resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: loader,
  plugins,
  devtool: 'cheap-module-source-map',
  devServer: {
    clientLogLevel: 'none',
    hot: true,
    compress: true,
    port: 3000,
    noInfo: true
  }
}
