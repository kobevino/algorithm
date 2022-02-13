const solution = require('../firstPalindrome');

describe('Find First Palindromic String in the Array', () => {
  it('should be "ada"', () => {
    expect(solution(["abc","car","ada","racecar","cool"]
    )).toMatch(/ada/);
  });

  it('should be "racecar"', () => {
    expect(solution(["notapalindrome","racecar"]
    )).toMatch(/racecar/);
  });

  it('should be empty string', () => {
    expect(solution(["def","ghi"])).toBe('');
  });
});