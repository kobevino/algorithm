/**
 * @description Leetcode 69
 * 주어진 정수의 제곱근의 소숫점 이하 자릿수는 자른 정수값을 구하기
 * @param {number} x
 * @return {number}
 */
function solution(x) {
  const squareRoot = Math.sqrt(x)
  return Math.floor(squareRoot)
}

module.exports = solution;