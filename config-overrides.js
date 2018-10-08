/* eslint-disable */
const { addBabelPlugin, override } = require("customize-cra");
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
  addBabelPlugin(['ramda']),
  rewireReactHotLoader
);
