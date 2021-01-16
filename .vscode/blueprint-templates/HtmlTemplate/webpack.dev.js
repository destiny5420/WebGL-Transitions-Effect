const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    hot: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        /*
          ref url: https://awdr74100.github.io/2020-03-02-webpack-minicssextractplugin/
          'style-loader': Inject the CSS processed by the css-loader into the HTML, which will exist in the form of style tags
        */
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
