/*
created by luyixin on 2017.05.13
*/

var webpack = require('webpack')
var path = require('path')
var __dir = path.resolve(__dirname, '..')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var rm = require('rimraf')

// 打包前，清空dist目录
rm(__dir + '/dist/*', err => {
  if (err) throw err
})

var extractLess = new ExtractTextPlugin({
    filename: "../css/[name].min.css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = {
  entry: {
    build: __dir + '/src/main.js'
  },
  output: {
    path: __dir + '/dist/static/js',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.BannerPlugin('webpack created by luyixin <410780496@qq.com>'),
    new HtmlWebpackPlugin({
      template: __dir + '/index.html',
      filename: '../../index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new ExtractTextPlugin('../css/[name].min.css'),
    extractLess,
    new UglifyJSPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
      }
    }),
    // 拆分依赖包JS到自己的文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // node_modules内的任何必需模块都将提取给依赖包
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // 将webpack运行时和模块清单提取到其自己的文件，以防止在更新应用程序包时更新依赖包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
};