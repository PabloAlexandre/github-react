const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const dev = {
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
    })
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
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'},
          {loader: 'postcss-loader', options: {
            plugins: () => [
              require('autoprefixer')()
            ]
          }}
        ]
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname,'./src/'),
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader?name=public/images/[name].[ext]',
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
      src: path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src/js')
    },
  },
}

module.exports = dev
