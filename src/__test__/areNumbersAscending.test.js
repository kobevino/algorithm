const solution = require('../areNumbersAscending');

describe('Check if Numbers Are Ascending in a Sentence', () => {
  it('should be true', () => {
    expect(solution('1 box has 3 blue 4 red 6 green and 12 yellow marbles')).toBeTruthy();
  });
  
  it('should be false', () => {
    expect(solution('hello world 5 x 5')).toBeFalsy();
  });
  
  it('should be false', () => {
    expect(solution('sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s')).toBeFalsy();
  });
})