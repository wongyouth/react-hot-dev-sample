var path = require('path');

module.exports = {
  entry: './app/index',
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["react-hot", "babel-loader"],
        // loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  }
}
