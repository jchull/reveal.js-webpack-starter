const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var webpack = require('webpack'),
  path = require('path');

var ROOT = path.resolve(__dirname);

var APP = __dirname + '/app';

var config = {
  context: APP,
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(ROOT, 'dist'),
    publicPath: '/',
    filename: 'presentation.bundle.js'
  },

  resolve: {
    // the fewer directories, the faster module resolution is
    modules: ['./node_modules'],
    alias: {
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
          'css-loader'
        ]
      },
      {
        test: /\.eot(\?\S*)?$/,
        use: [{
          loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
        }
        ]
      },
      {
        test: /\.woff2(\?\S*)?$/,
        use: [{
          loader: 'url-loader?limit=100000&mimetype=application/font-woff2'
        }
        ]
      },
      {
        test: /\.woff(\?\S*)?$/,
        use: [{
          loader: 'url-loader?limit=100000&mimetype=application/font-woff'
        }
        ]
      },
      {
        test: /\.ttf(\?\S*)?$/,
        use: [{
          loader: 'url-loader?limit=100000&mimetype=application/font-ttf'
        }
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader'
        }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }
        ]
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: 'file-loader'
        }
        ]
      },
      {
        test: /\.png$/,
        use: [{
          loader: 'url-loader?mimetype=image/png'
        }
        ]
      },
      {
        test: /index\.html/,
        use: [{
          loader: 'file-loader?name=[name].[ext]'
        }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].css",
      // chunkFilename: "[id].css"
    }),

    // use for development time hot-swap of only modified modules that the webpack client will load up
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: APP
  }
};

module.exports = config;
