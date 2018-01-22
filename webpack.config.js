const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('./src/', 'templates', 'index.html'),
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
    alias: {
      pages: path.resolve(__dirname, 'src/js/pages'),
      misc: path.resolve(__dirname, 'src/js/misc'),
      '~': path.resolve(__dirname, 'src/js')
    },
  },
}
