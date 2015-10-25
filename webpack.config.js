module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  devtool: 'source-map'
};
