const solution = require('../generatorPrime');

test('should be 2, 3, 5, 7', () => {
  const gen = solution(10);

  expect(gen.next().value).toBe(2);
  expect(gen.next().value).toBe(3);
  expect(gen.next().value).toBe(5);
  expect(gen.next().value).toBe(7);
});

describe('Get primes', () => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19];
  let idx = 0;
  
  afterEach(() => {
    idx = 0;
  });

  it('should be 2, 3, 5, 7, 11, 13, 17, 19', () => {
    const gen = solution(20);

    for (const val of gen) {
      expect(val).toBe(primes[idx++]);
    }
  });

  it('should be 2, 3, 5', () => {
    const gen = solution(5);

    for (const val of gen) {
      expect(val).toBe(primes[idx++]);
    }
  });
});