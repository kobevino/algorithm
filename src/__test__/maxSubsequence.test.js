const solution = require('../maxSubsequence');

describe('Find Subsequence of Length K With the Largest Sum', () => {
  it('should be [3, 3]', () => {
    expect(solution([2,1,3,3], 2)).toStrictEqual([3, 3]);
  });

  it('should be [-1,3,4]', () => {
    expect(solution([-1,-2,3,4], 3)).toStrictEqual([-1,3,4]);
  });

  it('should be [3,4,3,3]', () => {
    expect(solution([3,4,3,3], 2)).toStrictEqual([3, 4]);
  });

  it('should be [50, -75]', () => {
    expect(solution([50, -75], 2)).toStrictEqual([50, -75]);
  });

  it('should be [35,34,38,38,36,39,38,35]', () => {
    expect(solution([-16,-13,8,16,35,-17,30,-8,34,-2,-29,-35,15,13,-30,-34,6,15,28,-23,34,28,-24,15,-17,10,31,32,-3,-36,19,31,-5,-21,-33,-18,-23,-37,-15,12,-28,-40,1,38,38,-38,33,-35,-28,-40,4,-15,-29,-33,-18,-9,-29,20,1,36,-8,23,-34,16,-7,13,39,38,7,-7,-10,30,9,26,27,-37,-18,-25,14,-36,23,28,-15,35,-9,1], 8)).toStrictEqual(
      [35,34,38,38,36,39,38,35]);
  });
});