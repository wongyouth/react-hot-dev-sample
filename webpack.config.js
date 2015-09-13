module.exports = {
  entry: './app/index',
  output: {
    path: __dirname + "/www/js",
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
