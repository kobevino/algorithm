const solution = require('../capitalizeTitle');

describe('Capitalize the title', () => {
  it('should be "Capitalize The Title"', () => {
    expect(solution('capiTalIze tHe titLe')).toEqual('Capitalize The Title');
  });
  it('should be "First Letter of Each Word"', () => {
    expect(solution('First leTTeR of EACH Word')).toEqual('First Letter of Each Word');
  });
  it('should be "i Love Leetcode"', () => {
    expect(solution('i lOve leetcode')).toEqual('i Love Leetcode');
  });
})