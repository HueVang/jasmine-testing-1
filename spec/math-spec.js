// Each operation should return the correct value
var {add, subtract, multiply, divide, mod} = require('../app/components/math');
var {greet, praise, scold, fight} = require('../app/components/sentences');

// Math suite
describe('Math', function() {
  it('should equal 5', function(){
    expect(add(2,3)).toEqual(5);
  });
  it('should equal 49', function(){
    expect(subtract(56,7)).toEqual(49);
  });
  it('should equal 16', function(){
    expect(multiply(2,8)).toEqual(16);
  });
  it('should equal 5', function(){
    expect(divide(20, 4)).toEqual(5);
  });
  it('should equal 1', function(){
    expect(mod(5,2)).toEqual(1);
  });
  it('should be greater than 6', function(){
    expect(add(5,4)).toBeGreaterThan(6);
  });
  it('should be less than 3', function(){
    expect(subtract(4,2)).toBeLessThan(3);
  });

}); // end describe Math

// Sentences suite
describe('Sentences', function(){
  it('should return "Hello Hue!"', function(){
    expect(greet('Hue')).toEqual('Hello Hue!');
  });
  it('should contain "helpful"', function(){
    expect(praise('Hue')).toContain('helpful');
  });
  it('should match "touch"', function(){
    expect(scold('Hue')).toMatch('touch');
  });
  it('should return "It\'s Hue versus Google!"', function(){
    expect(fight('Hue')).toEqual('It\'s Hue versus Google!');
  });
}); // end describe Sentences
