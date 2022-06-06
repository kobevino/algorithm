/**
 * @description Leetcode 2293
 * 1. 모든 짝수 index는 최소값
 * 2. 모든 홀수 index는 최대값
 * 3. 마지막 남아있는 수 구하기
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
  let result = [...nums]
  
  while(result.length >= 2) {
    const newNums = []
    for (let i = 0; i < result.length / 2; i++) {
      const oddIdx = 2 * i
      const evenIdx = oddIdx + 1
      newNums.push(
        i % 2 === 0 
          ? Math.min(result[oddIdx], result[evenIdx]) 
          : Math.max(result[oddIdx], result[evenIdx])
      )
    }

    result = newNums
  }

  return result[0]
}

console.log(solution([1,3,5,2,4,8,2,2]))
console.log(solution([70, 38, 21, 22]))

module.exports = solution;