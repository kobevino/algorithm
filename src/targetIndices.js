/**
 * @description Leetcode 2089
 * @param {number[]} nums
 * @return {number[]}
 */
function solution(nums, target) {
  return nums.sort((a, b) => a - b).reduce((acc, curr, idx) => {
    if (curr === target) acc.push(idx);
    return acc;
  }, []);
}

module.exports = solution;