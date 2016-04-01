var profanity = require('../index');
var dictionary = require('../lib/dictionary');

var expect = require('chai').expect;

describe('Profanity', function() {
  describe('filter', function() {
    it('should filter curse words from a string', function() {
      var profaneString = 'Hey faggot';
      var censuredString = profanity.filter(profaneString);

      expect(censuredString).to.equal('Hey ******');
    });
  });

  describe('getProfaneWords', function() {
    it('this returns words that would have been filtered', function() {
      var profaneString = 'Hey faggot';
      var censoredList = profanity.getProfaneWords(profaneString);

      expect(censoredList[0]).to.equal('faggot');
    });
  });

  describe('getProfaneWords more than one', function() {
    it('this returns words that would have been filtered', function() {
      var profaneString = 'Hey faggot fucker shit';
      var censoredList = profanity.getProfaneWords(profaneString);

      expect(censoredList.length).to.equal(3);
      expect(censoredList.indexOf('fucker')).not.equal(-1);
      expect(censoredList.indexOf('shit')).not.equal(-1);
      expect(censoredList.indexOf('faggot')).not.equal(-1);
    });
  });

  describe('use', function() {
    it('should change the dictionary', function() {
      expect(profanity.dictionary).to.equal(dictionary);

      var newDictionary = ['popcorn'];
      profanity.use(newDictionary);

      expect(profanity.dictionary).to.deep.equal(newDictionary);
    });

    it('should filter curse words using a new dictionary', function() {
      var newDictionary = ['popcorn'];
      profanity.use(newDictionary);

      var censuredString = profanity.filter('I love popcorn!');
      expect(censuredString).to.equal('I love *******!');
    });
  });
});
