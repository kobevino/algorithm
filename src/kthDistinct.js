/**
 * @description Leetcode 2053
 * 주어진 배열에서 unique한 값 중에 k번째 값 반환하기
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
function solution(arr, k) {
  const map = new Map();

  arr.forEach(char => {
    map.set(char, (map.get(char) || 0) + 1);
  });

  for (let [key, val] of map) {
    if (val === 1) {
      k--;
      if (k === 0) return key;
    }
  }

  return '';
}

module.exports = solution;