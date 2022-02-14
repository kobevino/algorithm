/**
 * @description Leetcode 2099
 * 주어진 nums 배열 안에서 정수 k 길이만큼의 최대합을 구하라.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function solution(nums, k) {
  const maxNums = [...nums].sort((a, b) => b - a).slice(0, k);

  return nums.reduce((acc, curr) => {
    if (maxNums.indexOf(curr) > -1) {
      acc.push(curr);
      maxNums.splice(maxNums.findIndex(num => num === curr), 1);
    }
    return acc;
  }, []);
}

module.exports = solution;