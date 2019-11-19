
const path      = require('path');
const outputDir = path.join(__dirname, 'build/');
const isProd    = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    filename: 'index.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.ts', '.scss']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isProd
            },
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};