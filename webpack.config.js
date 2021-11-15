const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

const webpackMode = process.env.NODE_ENV;
const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

module.exports = {
  mode: webpackMode,
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
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
    new CopyWebPackPlugin({
      patterns: [{ from: './src/images', to: './images' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
    liveReload: true,
  },
  // development only
  devtool: webpackMode === DEVELOPMENT ? 'source-map' : false,
};
