/*
* created by lu.yixin on 2018/02/22
*/

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    filename: resolve('dist') + '/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  }),
  // 拆分依赖包JS到自己的文件
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
      // node_modules内的任何必需模块都将提取给依赖包
      return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0)
    }
  })
]
