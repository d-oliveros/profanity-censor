# profanity-censor

A tiny node.js module for censoring curse and bad words. It hosts a default dictionary,
with the option to use your own.

## Installation

```
npm install --save profanity-censor
```

## API

### profanity.filter(string)

Replaces the bad words in the string with asterisks. Returns the censored string.

```javascript
var profanity = require('profanity-censor');

console.log(profanity.filter('Bad words here.'));
```

### profanity.use(dictionary)

Replaces the dictionary with a provided dictionary. The dictionary should be an
array of strings.

```javascript
var profanity = require('profanity-censor');
var dictionary = ['popcorn', 'bad words'];
profanity.use(dictionary);
```
