const solution = require('../countVowelSubstrings');

describe('Count Vowel Substrings of a String', () => {
  it('should be 2', () => {
    expect(solution('aeiouu')).toBe(2);
  });
  
  it('should be 0', () => {
    expect(solution('unicornarihan')).toBe(0);
  });
  
  it('should be 7', () => {
    expect(solution('cuaieuouac')).toBe(7);
  });
})