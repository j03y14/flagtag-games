const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                targets: {
                  browsers: ['> 1% in KR'],
                },
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'scss'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@apis': path.resolve(__dirname, 'src/apis/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@reusable': path.resolve(__dirname, 'src/reusable/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      changeOrigin: true,
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
};
