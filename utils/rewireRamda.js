const { injectBabelPlugin } = require('react-app-rewired');

function rewireRamda(config, env, ramdaBabelOptions = {}) {
  config = injectBabelPlugin(['ramda', ramdaBabelOptions], config);
  return config;
}

module.exports = rewireRamda;