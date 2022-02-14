const { solution, betterSolution } = require('../countPoints');

describe('Get the number of rods that have all three colors of rings on them', () => {
  it.each(['B0B6G0R6R0R6G9', 'B0R0G0R9R0B0G0'])('should be 1', (str) => {
    expect(solution(str)).toBe(1);
    expect(betterSolution(str)).toBe(1);
  });

  it.each(['G4'])('should be 0', () => {
    expect(solution('G4')).toBe(0);
    expect(betterSolution('G4')).toBe(0);
  });
})