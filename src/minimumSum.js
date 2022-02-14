/**
 * @description Leetcode 2160
 * 주어진 배열안의 정수의 최소합 구하기
 * @param {number[]} num
 * @return {number}
 */
function solution(num) {
  const arr = num.toString().split('').sort();

  return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3]);
}

module.exports = solution;