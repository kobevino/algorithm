const solution = require('../minMaxGame');

describe('Return the last number that remains in nums after applying the algorithm', () => {
  it('should be 1', () => {
    expect(solution([1,3,5,2,4,8,2,2])).toBe(1)
  });
  
  it('should be 3', () => {
    expect(solution([3])).toBe(3)
  });
  
  it('should be 22', () => {
    expect(solution([70, 38, 21, 22])).toBe(22)
  });
})