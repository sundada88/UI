const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const os = require('os')
const HappyPack = require('happypack')
const happyThreadPoll = HappyPack.ThreadPool({
  size: os.cpus().length
})
const smp = new SpeedMeasureWebpackPlugin({

})
const webpackPugins = smp.wrap({
  // mode: 'development',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'packages': path.resolve(__dirname, './packages')
    }
  },
  entry: './packages/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  module: {
    rules: [{
        test: /\.js$/,
        // loader: 'babel-loader',
        loader: 'happypack/loader?id=happyBabel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg)(\?.*)?$/,
        loader: 'url-loader?limit=8192000&name=./[name].[ext]?[hash]'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarWebpackPlugin()
  ]
})
module.exports = {
  // mode: 'development',
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'packages': path.resolve(__dirname, './packages')
    }
  },
  entry: './packages/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        loader: 'happypack/loader?id=happyBabel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: ['cache-loader', 'vue-loader']
        // loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg)(\?.*)?$/,
        loader: 'url-loader?limit=8192000&name=./[name].[ext]?[hash]'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }],
      },
      canPrint: true
    }),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true',
      }],
      //共享进程池
      threadPool: happyThreadPoll,
      //允许 HappyPack 输出日志
      verbose: true,
    })
  ]
}