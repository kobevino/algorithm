/**
 * @description Leetcode 2057
 * 주어진 배열에서 10을 index로 나눈 나머지 값이 해당 배열 index 값과 같을 경우 가장 작은 인덱스 값을 반환하기
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i;
    }
  }

  return -1;
}

console.log(solution([7,8,3,5,2,6,3,1,1,4,5,4,8,7,2,0,9,9,0,5,7,1,6]));

module.exports = solution;