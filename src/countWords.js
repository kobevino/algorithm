/**
 * @description Leetcode 2085
 * 두 배열 안에 있는 단어 중에 중복되는 단어 찾기
 * 대신 단어는 각 배열에 딱 한번만 노출되어야함.
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
function solution(words1, words2) {
  const map1 = new Map();
  const map2 = new Map();
  let count = 0;
  
  for (const val of words1) map1.set(val, (map1.get(val) || 0) + 1);
  for (const val of words2) map2.set(val, (map2.get(val) || 0) + 1);

  for (const [key, value] of map1) {
    if (map2.get(key) === 1 && value === 1) {
      count++;
    }
  }
  
  return count;
}

module.exports = solution;