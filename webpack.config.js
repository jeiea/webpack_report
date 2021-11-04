const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildBasePath = path.resolve(__dirname, '../dist/www');

module.exports.default = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: buildBasePath,
    filename: '[name]_[id].js',
    chunkFilename: '[name]_[id].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                { runtime: 'automatic' },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app'],
    }),
    new ESLintPlugin({
      extensions: ['.js', '.jsx'],
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    // factor #1
    emitOnErrors: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    // # factor 2
    static: [buildBasePath],
  },
  target: 'web',
};
