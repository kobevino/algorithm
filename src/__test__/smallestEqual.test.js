const solution = require('../smallestEqual');

describe('Get Smallest Index With Equal Value', () => {
  it('should be 0', () => {
    expect(solution([0,1,2])).toBe(0);
  });
  
  it('should be 2', () => {
    expect(solution([4,3,2,1])).toBe(2);
  });
  
  it('should be -1', () => {
    expect(solution([1,2,3,4,5,6,7,8,9,0])).toBe(-1);
  });

  it('should be 21', () => {
    expect(solution([7,8,3,5,2,6,3,1,1,4,5,4,8,7,2,0,9,9,0,5,7,1,6])).toBe(21);
  });
})