const solution = require('../countWords');

describe('Count common words with one occurrence', () => {
  it('should be 2', () => {
    expect(solution(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])).toBe(2);
  });
  it('should be 0', () => {
    expect(solution(["b","bb","bbb"], ["a","aa","aaa"])).toBe(0);
  });
  it('should be 1', () => {
    expect(solution(["a","ab"], ["a","a","a","ab"])).toBe(1);
  });
});