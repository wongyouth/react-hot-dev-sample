module.exports = {
  entry: './app/index',
  output: {
    path: __dirname + "/www/js",
    filename: "bundle.js",
    publicPath: "/js/"
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
