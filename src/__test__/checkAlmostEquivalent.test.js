const solution = require('../checkAlmostEquivalent');

describe('Check Whether Two Strings are Almost Equivalent', () => {
  it('should be false', () => {
    expect(solution('aaaa', 'bccba')).toBeFalsy();
  });
  
  it('should be true', () => {
    expect(solution('abcdeef', 'abaaacc')).toBeTruthy();
  });
  
  it('should be true', () => {
    expect(solution('cccddabba', 'babababab')).toBeTruthy();
  });

  it('should be true', () => {
    expect(solution('aaaa', 'aaaa')).toBeTruthy();
  });

  it('should be true', () => {
    expect(solution('cqvvnqjncrp', 'hjtlyzvcbhj')).toBeTruthy();
  });
});