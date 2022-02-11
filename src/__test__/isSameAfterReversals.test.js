const { solution, betterSolution } = require('../isSameAfterReversals');


describe('Check if a number euqals after a Double Reversal', () => {
  it.each([526, 0, 1801])('should be true', (num) => {
    expect(solution(num)).toBeTruthy();
    expect(betterSolution(num)).toBeTruthy();
  });
  
  it.each([1800])('should be false', (num) => {
    
    expect(solution(num)).toBeFalsy();
    expect(betterSolution(num)).toBeFalsy();
  });
});
