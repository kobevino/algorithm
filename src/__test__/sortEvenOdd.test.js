const solution = require('../sortEvenOdd');

describe('Sort Even and Odd Indices Independently', () => {
  it('should be [2, 3, 4, 1]', () => {
    expect(solution([4, 1, 2, 3])).toStrictEqual([2, 3, 4, 1]);
  });
  
  it('should be [2, 1]', () => {
    expect(solution([2, 1])).toStrictEqual([2, 1]);
  });

  it('should be [9,46,15,45,15,41,27,34,32,31,33,31,36,26,36,16,44,6]', () => {
    expect(solution([36,45,32,31,15,41,9,46,36,6,15,16,33,26,27,31,44,34])).toStrictEqual([9,46,15,45,15,41,27,34,32,31,33,31,36,26,36,16,44,6]);
  });
});