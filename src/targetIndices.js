/**
 * @description Leetcode 2089
 * 오름차순으로 sorting 한 이후 target 인덱스 찾기
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