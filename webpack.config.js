const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT = path.resolve(__dirname);

const APP = __dirname + '/app';

const config = {
  context: APP,
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(ROOT, 'dist'),
    publicPath: '/',
    filename: 'presentation.bundle.js'
  },

  module: {
    rules: [
      {
        test: require.resolve('reveal.js'),
        use: {
          loader: 'expose-loader',
          options: 'Reveal'
        }
      },
      {
        test: /\.eot(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/font-woff2'
      },
      {
        test: /\.woff(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/font-ttf'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'svg-url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: 'url-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /index\.html/,
        use: ['html-loader', 'file-loader?name=[name].[ext]']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // use for development time hot-swap of only modified modules that the webpack client will load up
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'images',
      to: 'images'
    }
    ])
  ],
  devServer: {
    contentBase: APP
  }
};

module.exports = config;
