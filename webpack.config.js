const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const webpackMode = process.env.NODE_ENV || DEVELOPMENT;

module.exports = {
  mode: webpackMode,
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].min.js',
  },
  optimization: {
    minimizer:
      webpackMode === PRODUCTION
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ]
        : [],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
  },
  // development only
  devtool: webpackMode === DEVELOPMENT ? 'source-map' : '',
};
