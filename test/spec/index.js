var expect = require('chai').expect;

var MIN_LEN = 2;
var MAX_LEN = 20;

describe('random-lorem: ', function () {

  var randomLorem = require('../../');

  it('randomLorem()', function () {
    expect(randomLorem()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomLorem()).to.have.length.within(MIN_LEN, MAX_LEN);
    }
  });

  it('randomLorem(8)', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem(8)).to.have.length.within(MIN_LEN, 8);
    }
  });

  it('randomLorem(8, 8)', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomLorem(8, 8).length).to.be.equal(8);
    }
  });
});
