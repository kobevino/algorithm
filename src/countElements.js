/**
 * @description Leetcode 2148
 * 배열의 요소들 가운데 작은 수와 큰 수 사이에 있는 요소의 갯수 구하기 
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
  const bigNum = Math.max(...nums);
  const smallNum = Math.min(...nums);

  return nums.filter(num => num !== bigNum && num !== smallNum).length;
}

module.exports = solution;