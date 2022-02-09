/**
 * @description 해커랭크
 * 정수 N 범위내에서 소수를 구하라.
 * @generator
 * @param {number} n
 * @yields {number} 정수 범위 이내에 있는 소수
 */
function* solution(n) {
  const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      yield i;
    }
  }
}

module.exports = solution;