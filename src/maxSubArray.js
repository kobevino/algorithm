/**
 * @description Leetcode 53
 * 연속하는 숫자의 최대합 구하기
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
  let max = 0
  let sum = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i])
    sum = Math.max(max, sum)
  }

  return sum
}


console.log(solution([2, -1]))

module.exports = solution;