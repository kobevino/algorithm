const solution = require('../mostWordsFound');

describe('Get maximum number of words found in sentences', () => {
  it('should be 6', () => {
    expect(solution(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])).toBe(6);
  });

  it('should be 3', () => {
    expect(solution(["please wait", "continue to fight", "continue to win"])).toBe(3);
  });
});