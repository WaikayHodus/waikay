module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};

  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    fs: false,
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    vm: require.resolve("vm-browserify"),
    "react-error-overlay": "6.0.9",
    zlib: require.resolve("browserify-zlib"),
    zlib: false,
    process: "process/browser",
  });
  config.resolve.fallback = fallback;
  return config;
};
// /*config-override.js*/
// const webpack = require("webpack");

// module.exports = function override(config, env) {
//   config.resolve.fallback = {
//     util: require.resolve("util/"),
//     url: require.resolve("url"),
//     assert: require.resolve("assert"),
//     buffer: require.resolve("buffer"),
//   };
//   config.plugins.path(
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ("buffer", "Buffer"),
//     })
//   );
//   return config;
// };
