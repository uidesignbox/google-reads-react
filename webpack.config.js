const path = require('path');
const HtmlWebPackPLugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: {
      main: './src/index.js'
   },
   output: {
      filename: 'main.js'
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
         },
         {
            test: /\.(scss|css)$/,
            use: [
               'css-hot-loader',
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ]
         }
      ]
   },
   devServer: {
      historyApiFallback: true
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   plugins: [
      new HtmlWebPackPLugin({
         template: './src/index.html',
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         filename: 'style.[name].css',
         chunkFilename: "[id].css"
      })
   ]
};