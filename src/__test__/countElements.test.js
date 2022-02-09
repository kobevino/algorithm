const solution = require('../countElements');

describe('Count elements', () => {
  it('should be 2', () => {
    expect(solution([11, 7, 2, 15])).toBe(2);
  });

  it('should be 2', () => {
    expect(solution([-3, 3, 3, 90])).toBe(2);
  });
});
