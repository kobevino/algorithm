/**
 * @description Leetcode 2042
 * 주어진 문장에 포함된 숫자들이 오름차순인지 체크
 * @param {string} s
 * @return {boolean}
 */
function solution(s) {
  return s.split(' ').reduce((acc, curr) => {
    if (!isNaN(curr)) acc.push(Number(curr));
    return acc;
  }
  , []).every((num, idx, arr) => idx === 0 || num > arr[idx - 1]);
}

module.exports = solution;