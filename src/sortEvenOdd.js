/**
 * @description LeetCode 2164
 * 홀수번째 인덱스는 내림차순, 짝수번째 인덱스는 오름차순
 * @param {number[]} nums
 * @return {number[]}
 */
function solution(nums) {
  const even = [];
  const odd = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    i % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
  }

  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    const num = i % 2 === 0 ? even.splice(0, 1)[0] : odd.splice(0, 1)[0];
    result.push(num);
  }

  return result;
}

module.exports = solution;