const { resolve } = require("path");

module.exports = {
  mode: 'development',
  entry: "./index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  watch: true,
  resolve: {
    symlinks: false,
    extensions: ['.ts', '.tsx', '.mjs', '.js'],
  },
  cache: {
    type: "memory",
    maxGenerations: 1,
  },
};
