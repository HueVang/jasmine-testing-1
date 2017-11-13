// Each operation should return the correct value
var {add, subtract, multiply, divide, mod} = require('../app/components/math');

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
