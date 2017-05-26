const helper = require('./cviceni2-helper');

module.exports = {
  greet: function (name) {
    var formattedName = helper.format(name);
    return 'Hello ' + formattedName;
  }
};
