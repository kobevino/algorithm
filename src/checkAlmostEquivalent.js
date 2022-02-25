/**
 * @description Leetcode 2068
 * 두 문자열이 거의 동등한지 체크하기
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function solution(word1, word2) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    const key1 = word1.charAt(i);
    const key2 = word2.charAt(i);
    
    map1.set(key1, (map1.get(key1) || 0) + 1);
    map2.set(key2, (map2.get(key2) || 0) + 1);
  }
  
  const set = new Set([...map1.keys(), ...map2.keys()]);
  let max = 0;

  set.forEach(key => {
    const diff = Math.abs((map1.get(key) || 0) - (map2.get(key) || 0));
    
    max = Math.max(max, diff);
  });

  return max <= 3;
}

module.exports = solution;
