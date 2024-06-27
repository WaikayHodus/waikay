const webpack = require("webpack");
const PUBLIC_URL = process.env.PUBLIC_URL || "";

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      "process.env.PUBLIC_URL": JSON.stringify(PUBLIC_URL),
    }),
  ],
};
