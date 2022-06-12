const solution = require('../maxSubArray');

describe('Get maximum sum of contiguous subarray', () => {
  it('should be 6', () => {
    expect(solution([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
  });
  
  it('should be 1', () => {
    expect(solution([1])).toBe(1)
  });
  
  it('should be 23', () => {
    expect(solution([5, 4, -1, 7, 8])).toBe(23)
  });

  it('should be -1', () => {
    expect(solution([-1])).toBe(-1)
  })
})