const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  console.log("running react-app-rewired");
  config.resolve.fallback = {
    fs: false,
    net: false,
    tls: false,
    dns: false,
    child_process: false,
    async_hooks: false,
  };
  config.plugins.push(new NodePolyfillPlugin());
  return config;
}