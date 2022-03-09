const solution = require('../minMovesToSeat');

describe('Get Minimum Number of Moves to Seat Everyone', () => {
  it('should be 4', () => {
    expect(solution([3,1,5], [2,7,4])).toBe(4);
  });
  
  it('should be 7', () => {
    expect(solution([4,1,5,9], [1,3,2,6])).toBe(7);
  });
  
  it('should be 4', () => {
    expect(solution([2,2,6,6], [1,3,2,6])).toBe(4);
  });
})