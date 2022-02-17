const solution = require('../targetIndices');

describe('Find Target Indices After Sorting Array', () => {
  it('should be [1, 2]', () => {
    expect(solution([1, 2, 5, 2, 3], 2)).toStrictEqual([1, 2]);
  });

  it('should be [3]', () => {
    expect(solution([1,2,5,2,3], 3)).toStrictEqual([3]);
  });

  it('should be [4]', () => {
    expect(solution([1,2,5,2,3], 5)).toStrictEqual([4]);
  });
});