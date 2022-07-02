const solution = require('../climbStairs');

describe('Get the distinct ways to climb to the top', () => {
  it('should be 2', () => {
    expect(solution(2)).toBe(2)
  });
  
  it('should be 3', () => {
    expect(solution(3)).toBe(3)
  });
  
  it('should be 5', () => {
    expect(solution(4)).toBe(5)
  });
  
  it('should be 8', () => {
    expect(solution(5)).toBe(8)
  });
  
  it('should be 13', () => {
    expect(solution(6)).toBe(13)
  });
})