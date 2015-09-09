var path = require('path');

module.exports = {
  entry: './app/index',
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        // loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  }
}
