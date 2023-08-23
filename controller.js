const model = require('./model');
const view = require('./view');

module.exports = {
  generateGreeting: function(name) {
    const message = model(name);
    view(message);
  }
};
