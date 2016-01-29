var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 5000,
          name: '[name].[ext]'
        }
      }
    ],
    noParse: [
      /\.min\.js/
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ],
  vue: {
    autoprefixer: {
      browsers: ['> 0.5% in CN']
    },
    loaders: {
      css: ExtractTextPlugin.extract('vue-style-loader', 'css'),
      less: ExtractTextPlugin.extract('vue-style-loader', 'css!less')
    }
  },
  babel: {
    presets: ["es2015", "stage-2"],
    plugins: ["transform-runtime"],
    comments: false
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'

  module.exports.plugins = (module.exports.plugins || []).concat([
    // short-circuits all Vue.js warning code
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // minify with dead-code elimination
    // remove all comments
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    // optimize module ids by occurence count
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
