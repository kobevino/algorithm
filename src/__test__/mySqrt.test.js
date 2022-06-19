const solution = require('../mySqrt');

describe('Get the decimal part of the square root', () => {
  it('should be 2', () => {
    expect(solution(8)).toBe(2)
  });
  
  it('should be 2', () => {
    expect(solution(4)).toBe(2)
  });

  it('should be 3', () => {
    expect(solution(15)).toBe(3)
  });

  it('should be 1', () => {
    expect(solution(1)).toBe(1)
  });
})