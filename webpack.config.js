const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [

      { // javascript
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      { //styling
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true,
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },

      { //images
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name][hash].[ext]',
            },
          },
        ],
      },

      { //fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'fonts/[name][hash].[ext]',
          },
        ],
      },
    ],
  },
//  plugins: [
//    new webpack.HotModuleReplacementPlugin(),
//  ],
  
  devServer: {
    contentBase: './dist',
//    hot: true,
  },
};