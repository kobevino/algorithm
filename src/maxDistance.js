/**
 * @description Leetcode 2078
 * 색상이 다른 두 집간의 최대 거리 구하기
 * @param {number[]} colors
 * @return {number}
 */
function solution(colors) {
  let maxVal = 0;

  for (let i = 0; i < colors.length - 1; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] === colors[j]) continue;
      maxVal = Math.max(maxVal, Math.abs(i - j));
      
    }
  }

  return maxVal;
}

module.exports = solution;