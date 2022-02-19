const solution = require('../timeRequiredToBuy');

describe('Get time needed to buy tickets', () => {
  it('should be 6', () => {
    expect(solution([2, 3, 2], 2)).toBe(6);
  });

  it('should be 8', () => {
    expect(solution([5, 1, 1, 1], 0)).toBe(8);
  });  
});