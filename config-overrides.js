/* eslint-disable */
const { compose } = require('react-app-rewired');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireCssModules = require('react-app-rewire-css-modules');
const rewireRamda = require('./utils/rewireRamda');

module.exports = function override(config, env) {
  const rewires = compose(
    rewireRamda,
    rewireCssModules,
    rewireReactHotLoader
  );
  return rewires(config, env);
};
