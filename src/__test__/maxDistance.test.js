const solution = require('../maxDistance');

describe('Get maximum distance between two houses with different colors', () => {
  it('should be 3', () => {
    expect(solution([1, 1, 1, 6, 1, 1, 1])).toBe(3);
  });
  
  it('should be 4', () => {
    expect(solution([1, 8, 3, 8, 3])).toBe(4);
  });
  
  it('should be 3', () => {
    expect(solution([0, 1])).toBe(1);
  });
});