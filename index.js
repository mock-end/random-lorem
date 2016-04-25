'use strict';

var clamp          = require('clamp');
var randomNatural  = require('random-natural');
var randomSyllable = require('random-syllable');

var MIN_LEN = 2;
var MAX_LEN = 18;

module.exports = function (options) {

  options = options || {
      syllables: randomNatural({
        min: 1,
        max: 3,
        inspected: true
      })
    };

  var length    = options.length;
  var syllables = options.syllables;

  var result = '';

  if (syllables) {
    for (var i = 0; i < syllables; i++) {
      result += randomSyllable();
    }

    return result.substring(0, MAX_LEN);
  }


  if (!length && ( options.min || options.max)) {
    length = randomNatural({
      min: options.min || MIN_LEN,
      max: options.max || MAX_LEN
    });
  }

  length = length || randomNatural({
      min: MIN_LEN,
      max: MAX_LEN,
      inspected: true
    });


  length = clamp(length, MIN_LEN, MAX_LEN);


  while (result.length < length) {
    result += randomSyllable();
  }

  return result.substring(0, length);
};
