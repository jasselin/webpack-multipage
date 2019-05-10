module.exports = {
  entry: {
    a: "./src/a.js",
    b: "./src/b.js"
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: __dirname + "/dist"
  }
};