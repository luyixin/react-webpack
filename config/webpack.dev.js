/*
created by luyixin on 2017.05.13
*/

var webpack = require('webpack')
var path = require('path')
var __dir = path.resolve(__dirname, '..')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    build: __dir + '/src/main.js'
  },
  output: {
    filename: '[name].js',
    path: __dir + '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader"
        }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'url-loader?name=./img/[name].[hash:7].[ext]'
      }
      ]
    },
    plugins: [
    new webpack.BannerPlugin('webpack created by luyixin <410780496@qq.com>'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dir + '/index.html'
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
    })
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
      clientLogLevel: 'none',
      hot: true,
      port: 3000,
      contentBase: "./",
      open: false,
      lazy: false
    }
  };

