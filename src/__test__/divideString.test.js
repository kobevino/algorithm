const solution = require('../divideString');

describe('Divide a string into groups of size K', () => {
  it('should be ["abc","def","ghi"]', () => {
    expect(solution('abcdefghi', 3, 'x')).toStrictEqual(["abc","def","ghi"]);
  });

  it('should be ["abcde","fghix"]', () => {
    expect(solution('abcdefghi', 5, 'x')).toStrictEqual(["abcde","fghix"]);
  });

  it('should be ["abc","def","ghi", "jxx"]', () => {
    expect(solution('abcdefghij', 3, 'x')).toStrictEqual(["abc","def","ghi", "jxx"]);
  });
});