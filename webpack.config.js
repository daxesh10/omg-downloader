let path = require("path");
module.exports = {
  context:path.resolve(__dirname,"src"),
  entry: { app:['./index.js'] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
//  resolve: {
//     extensions: ['.js', '.jsx']
//   },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
              cacheDirectory: true,
              presets: ['react', 'es2015']
        }
      }
    ]
  }


};