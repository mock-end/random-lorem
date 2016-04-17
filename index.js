'use strict';

var clamp         = require('clamp');
var randomChar    = require('random-char');
var randomNatural = require('random-natural');


module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {
    min = 1;
    max = 10;
  } else if (length === 1) {
    max = min;
    min = 1;
  }

  length = randomNatural(min, max);
  length = clamp(length, 1, 10);

  var result = '';

  while (length--) {
    result += randomChar('lower');
  }

  return result;
};
