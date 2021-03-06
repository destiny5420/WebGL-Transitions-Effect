const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/[name].[hash].bundle.js',
  },
  resolve: {
    alias: {
      // styles: path.resolve(__dirname, './src/styles/')
    },
    modules: [
      path.resolve('./src'),
      path.resolve('./src/js'),
      path.resolve('./src/scss'),
      path.resolve('./src/assets'),
      path.resolve('./src/image'),
      path.resolve('node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader:
              'url-loader' /* ref Url: https://awdr74100.github.io/2020-03-09-webpack-urlloader-fileloader/ */,
            options: {
              limit: 100,
              name: '[path][name].[ext]?[hash:5]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
        include: path.resolve('./src/image'),
        exclude: path.resolve('./node_modules'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Template Project',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      description: 'description for project',
      keywords: 'input keyword',
      icon: './assets/favicon/favicon.ico', // path of dist folder
      ogtype: 'website',
      ogimage:
        'https://wwwcdn.cincopa.com/blogres/wp-content/uploads/2019/02/video-tutorial-image.jpg',
      ogurl: 'https://www.google.com',
      oglocale: 'zh_tw',
      includeFont:
        'https://fonts.googleapis.com/css?family=Noto+Sans+TC:300|Noto+Serif+TC:500,700&display=swap',
      chunks: ['main'], // description url: https://segmentfault.com/a/1190000007294861
      minify: true, // Does compress html?
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets',
          to: './assets',
        },
      ],
    }),
  ],
}
