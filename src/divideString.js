/**
 * @description Leetcode 2138
 * 1. size k 만큼 문자열 그룹핑해서 배열 만들기.
 * 2. 그룹핑하는데 문자열이 모자르면 fill 문자로 채운다.
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
function solution(s, k, fill) {
  const { length } = s;
  const group = [];
  const groupSize =  Math.floor(length / k) + (length % k !== 0 ? 1 : 0);

  if (groupSize * k !== length) {
    s += fill.repeat(groupSize * k - length);
  }

  for (let i = 0; i < groupSize; i++) {
    let idx = k * i;
    group[i] = s[k * i];
    
    while (group[i].length < k) {
      group[i] += s[++idx];
    }
  }

  return group;
}

module.exports = solution;