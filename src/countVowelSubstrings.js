/**
 * @description Leetcode 2062
 * 5개의 모음이 (a, e, i, o, u) 연속되는 갯수를 찾아라
 * @param {string} word
 * @return {number}
 */
function solution(word) {
  const set = new Set('aeiou');
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const map = new Map();

    for (let j = i; j < word.length; j++) {
      const char = word[j];
      if (!set.has(char)) break;

      map.set(char, true);
      
      if (map.size === 5) count++;
    }
  }

  return count;
}

module.exports = solution;