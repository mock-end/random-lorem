var expect = require('chai').expect;

var MIN_LEN = 2;
var MAX_LEN = 18;

describe('random-lorem: ', function () {

  var randomLorem = require('../../');

  it('randomLorem()', function () {
    expect(randomLorem()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomLorem()).to.have.length.within(MIN_LEN, 9);
    }
  });

  it('randomLorem({ syllables: 5 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem({ syllables: 5 })).to.have.length.within(MIN_LEN, 15);
    }
  });

  it('randomLorem({ length: 8 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem({ length: 8 })).to.have.length(8);
    }
  });

  it('randomLorem({ min: 10, max: 18 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem({ min: 10, max: 18 })).to.have.length.within(10, 18);
    }
  });

  it('randomLorem({ max: 10 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem({ max: 10 })).to.have.length.within(MIN_LEN, 10);
    }
  });

  it('randomLorem({ min: 10 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem({ min: 10 })).to.have.length.within(10, MAX_LEN);
    }
  });

  it('randomLorem({ min: "0", max: "0" })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem({
        min: '0',
        max: '0'
      })).to.have.length.within(MIN_LEN, MAX_LEN);
    }
  });
});
