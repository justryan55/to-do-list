const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist', 
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  
      title: 'Development',
      filename: 'index.html',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
   use: ["style-loader", "css-loader", 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          name: '[name].[ext]', 
          outputPath: 'assets/svg/', 
        },    
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
    ]
  }
}