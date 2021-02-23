const authentication = require('./authentication');
const newOrderTrigger = require('./triggers/new_order.js');
module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
   triggers: { [newOrderTrigger.key]: newOrderTrigger },
};
