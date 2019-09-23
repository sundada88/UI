const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader')
module.exports = {
  mode: 'production',
  entry: {
    'sun-docs': './docs/src/doc/index.js',
    'sun-mobile': './docs/src/app/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: './',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      packages: path.join(__dirname, '../packages')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          '@vant/markdown-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg)(\?.*)?$/,
        loader: 'url-loader?limit=8192000&name=./[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['sun-docs'],
      template: './index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['sun-mobile'],
      template: './index.html',
      filename: 'mobile.html',
      inject: true
    })
  ]
};