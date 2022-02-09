const solution = require('../meanderingArray');

describe('Make a meandering array', () => {
  it('should be [25, -2, 25, 2, 8,  5, 7]', () => {
    expect(solution([5, 2, 7, 8, -2, 25, 25])).toStrictEqual([25, -2, 25, 2, 8,  5, 7]);
  });

  it('should be [5, 1, 4, 2 3]', () => {
    expect(solution([3, 5, 1, 2, 4])).toStrictEqual([5, 1, 4, 2, 3]);
  });
});
