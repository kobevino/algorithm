/**
 * @description Leetcode 2144
 * 최소 비용 구하기
 * @param {number[]} cost
 * @return {number}
 */
function solution(cost) {
  return cost.sort((a, b) => b - a).reduce((acc, curr, idx) => {
    if ((idx + 1) % 3 === 0) return acc;
    return acc += curr
  }, 0);
}

module.exports = solution;