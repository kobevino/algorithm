const solution = require('../findFinalValue');

describe('Find final value', () => {
  it('should be 24', () => {
    expect(solution([5, 3, 6, 1, 12], 3)).toBe(24);
  });

  it('should be 4', () => {
    expect(solution([2, 7, 9], 4)).toBe(4);
  });
});