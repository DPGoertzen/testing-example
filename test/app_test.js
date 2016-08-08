var addOne = require('../src/app.js').addOne;
var expect = require('chai').expect;

describe('testing addOne function', function(){

  it('should add 1 to the argument', function(){
    //here is where actual test goes
    var number = 42;
    var result = addOne(number);
    expect(result).to.equal(43);

  });

  // new test
  // it(...);

  // describe


});
