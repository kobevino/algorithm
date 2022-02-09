const solution = require('../minimumCost');

describe('Get minimum cost', () => {
  it('should be 5', () => {
    expect(solution([2, 3, 1])).toBe(5);
  });
  it('should be 23', () => {
    expect(solution([6,5,7,9,2,2])).toBe(23);
  });
  it('should be 10', () => {
    expect(solution([5, 5])).toBe(10);
  });
});