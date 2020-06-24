const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import ('webpack').Configuration} */
module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json', '.png', '.ico'],
  },
  mode: 'production',
  entry: './src/js/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    }),
  ],
}
