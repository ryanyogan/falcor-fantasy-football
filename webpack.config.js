var webpack = require('webpack');

module.exports = {
  entry: [
    //'webpack-dev-server/client?http://localhost:8080',
    //'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot!babel', exclude: /node_modules/ }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
