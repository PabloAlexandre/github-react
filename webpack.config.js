const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = {
  dist: path.resolve(__dirname, 'build/'),
  src: path.resolve(__dirname, 'src/'),
}

module.exports = {
  entry: path.join(paths.src, 'index.js'),
  output: {
    path: paths.dist,
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'templates', 'index.html'),
    }),
    new ExtractTextPlugin('style.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader?name=public/icons/[name].[ext]',
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
