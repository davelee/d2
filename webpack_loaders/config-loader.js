// This loader makes it easy to share client/server side config without having to worry about exposing
// sensitive information in the client side javascript bundle.
// The loader uses this by passing in an array of whitelisted keys
const _ = require('lodash');

module.exports = function(source, map) {
  this.cacheable();
  this.addDependency(this.resourcePath);

  const config = this.exec(source, this.resourcePath); // Load config like a require()
  const newConfig = _.pick(config, this.query.whitelistedKeys); // Pick whitelisted keys

  return `module.exports = ${JSON.stringify(newConfig)}`;
};