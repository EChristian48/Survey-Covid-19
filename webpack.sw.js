const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import ('webpack').Configuration} */
module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'production',
  entry: './src/js/service-worker.ts',
  output: {
    filename: 'service-worker.js'
  },
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
    ],
  },
}
