const solution = require('../findEvenNumbers');

describe('Finding 3-Digit Even Numbers', () => {
  it('shoult be [102,120,130,132,210,230,302,310,312,320]', () => {
    expect(solution([2,1,3,0])).toStrictEqual([102,120,130,132,210,230,302,310,312,320]);
  });

  it('shoult be [222,228,282,288,822,828,882]', () => {
    expect(solution([2,2,8,8,2])).toStrictEqual([222,228,282,288,822,828,882]);
  });

  it('shoult be []', () => {
    expect(solution([3,7,5])).toStrictEqual([]);
  });
});