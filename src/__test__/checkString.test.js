const solution = require('../checkString');

describe(`Check if All A's Appears Before All B's`, () => {
  it('should be true', () => {
    expect(solution('aaabbb')).toBeTruthy();
  });

  it('should be false', () => {
    expect(solution('abab')).toBeFalsy();
  });

  it('should be true', () => {
    expect(solution('bb')).toBeTruthy();
  });
});