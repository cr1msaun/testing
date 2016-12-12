var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var paths = {
  app: './src/app/',
  styles: './src/styles/',
  img: './src/img/',
  indexTpl: './src/index.pug',
  entry: './src/app/index.js',
  build: './build'
}

module.exports = {
  entry: ['babel-polyfill', paths.entry],
  output: {
    path: paths.build,
    filename: 'gb.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      // babel
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      // pug
      {
        test: /\.pug$/,
        loader: 'pug-loader?pretty=true'
      },

      // scss
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader", "sass-resources"]
      },

      // url-loader
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.indexTpl
    }),
    new CopyWebpackPlugin([
      {from: paths.app + 'data.json'},
      {from: paths.img, to: 'img'}
    ])
  ],

  // Provide paths to the file with SASS variables and mixins to import it into every SASS module
  sassResources: [paths.styles + 'variables.scss', paths.styles + 'mixins.scss']
};
