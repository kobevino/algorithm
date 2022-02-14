/**
 * @description Leetcode 2124
 * 문자열 s에 포함되어 있는 모든 'a'가 'b'보다 앞에 위치되어 있는지 체크
 * @param {string} s
 * @return {boolean}
 */
function solution(s) {
  const aIdx = s.lastIndexOf('a');
  const bIdx = s.indexOf('b');

  return bIdx > -1 ? aIdx < bIdx : true;
}

module.exports = solution;