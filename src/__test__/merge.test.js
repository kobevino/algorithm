const solution = require('../merge');

describe('Modify merged nums1', () => {
  it('should be [1, 2, 2, 3, 5, 6]', () => {
    expect(solution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([1, 2, 2, 3, 5, 6])
  });
  
  it('should be [1, 2, 3, 4, 5, 6]', () => {
    expect(solution([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)).toStrictEqual([1, 2, 3, 4, 5, 6])
  });
  
  it('should be [1]', () => {
    expect(solution([1], 1, [], 0)).toStrictEqual([1])
  });

  it('should be [1]', () => {
    expect(solution([0], 0, [1], 1)).toStrictEqual([1])
  });
})