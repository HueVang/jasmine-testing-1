var {greet, praise, scold, fight} = require('../app/components/sentences');

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
