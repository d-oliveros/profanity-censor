var dictionary = require('./dictionary');

module.exports = function getProfaneWords(str) {
    str = str || '';
    var regexp = new RegExp(dictionary.join('|'), 'gi');

    return str.match(regexp);
};
