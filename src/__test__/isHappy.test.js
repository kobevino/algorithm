const solution = require('../isHappy');

describe('Return true if n is happy number, and false if not.', () => {
  it('should be truthy', () => {
    expect(solution(19)).toBeTruthy()
  });
  
  it('should be falsy', () => {
    expect(solution(2)).toBeFalsy()
  });
  
  it('should be truthy', () => {
    expect(solution(68)).toBeTruthy()
  });
})