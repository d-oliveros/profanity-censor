var dictionary = require('./dictionary');

module.exports = function filter(string) {
  string = string || '';
  var regexp = new RegExp(dictionary.join('|'), 'gi');

  return string.replace(regexp, function(s) {
    var i = 0;
    var asterisks = '';

    while (i < s.length) {
      asterisks += '*';
      i++;
    }

    return asterisks;
  });
};
