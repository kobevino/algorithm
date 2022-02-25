const solution = require('../kthDistinct');

describe('Get Kth Distinct String in an Array', () => {
  it('should be a', () => {
    expect(solution(["d","b","c","b","c","a"], 2)).toMatch(/a/);
  });
  
  it('should be aaa', () => {
    expect(solution(["aaa","aa","a"], 1)).toMatch(/aaa/);
  });
  
  it('should be empty string', () => {
    expect(solution(["a","b","a"], 3)).toBe('')
  });
})