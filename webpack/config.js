
const path = require('path')

module.exports = {
  entry: './src/client.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'client.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  }
}

