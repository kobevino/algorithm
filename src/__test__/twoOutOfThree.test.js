const solution = require('../twoOutOfThree');

describe('Return a distinct array containing all the values that are present in at the least two out of the three arrays', (first, second, third) => {
  it('should be [2, 3]', () => {
    expect(solution([1, 1, 3, 2], [2, 3], [3])).toStrictEqual([2, 3]);
  });
  
  it('should be [3, 1, 2]', () => {
    expect(solution([3, 1], [2, 3], [1, 2])).toStrictEqual([3, 1, 2]);
  });
  
  it('should be empty array', () => {
    expect(solution([1, 2, 2], [4, 3, 3], [5])).toStrictEqual([]);
  });
})