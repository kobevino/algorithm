/**
 * @description Leetcode 70
 * 피보나치 수열 문제
 * 1. 계단 1 혹은 계단 2 로만 이동할 수 있다.
 * 2. 주어진 정수의 계단을 오르는 방법 갯수 구하기.
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  if (n <= 2) return n

  let oneStep = 1
  let twoStep = 2
  let sum = oneStep + twoStep
  
  for (i = 3; i < n; i++) {
    oneStep = twoStep
    twoStep = sum
    sum = oneStep + twoStep
  }

  return sum
}

module.exports = solution;