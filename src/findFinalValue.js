/**
 * @description Leetcode 2154
 * 1. 배열 안에 original 값이 존재하면 곱하기 2 연산
 * 2. 곱하기 2 연산한 값이 배열에 존재하면 다시 반복
 * 3. 곱하기 2 연산한 값이 배열에 존재하지 않으면 마지막 값 도출
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
function solution(nums, original) {
  let temp = original;

  while (nums.indexOf(temp) > -1) {
    temp = temp * 2;
  }

  return temp;
}

module.exports = solution;