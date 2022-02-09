const solution = require('../minimumSum');

describe('Minimum Sum of Four Digit Number After Splitting Digits', () => {
  it('should be 52', () => {
    expect(solution(2932)).toBe(52);
  });

  it('should be 13', () => {
    expect(solution(4009)).toBe(13);
  });
});