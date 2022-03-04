/**
 * @description Leetcode 2042
 * 주어진 문장에 포함된 숫자들이 오름차순인지 체크
 * @param {string} s
 * @return {boolean}
 */
function solution(s) {
  const nums = s.split(' ').reduce((acc, curr) => {
    if (!isNaN(curr)) acc.push(Number(curr));
    return acc;
  }
  , []);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) return false;
  }
  return true;
}

module.exports = solution;