'use strict';

var clamp         = require('clamp');
var randomChar    = require('random-char');
var randomNatural = require('random-natural');

var MIN_LEN = 2;
var MAX_LEN = 20;

module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {
    min = MIN_LEN;
    max = MAX_LEN;
  } else if (length === 1) {
    max = min;
    min = MIN_LEN;
  }

  length = randomNatural(min, max);
  length = clamp(length, MIN_LEN, MAX_LEN);

  var result = '';

  while (length--) {
    result += randomChar('lower');
  }

  return result;
};
