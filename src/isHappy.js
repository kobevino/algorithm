/**
 * @description Leetcode 202
 * 1. 은 Happy Number
 * 2. 정수 n의 각 자릿수 제곱근의 합이 1이 나오면 Happy Number다.
 * 3. 1이 나오면 true, 그렇지 않으면 false 반환
 * @param {number} n
 * @return {boolean}
 */
function solution(n) {
  const set = new Set()
  let sum = n
  
  while (sum !== 1) {
    const strNum = sum.toString()
    sum = 0
    
    for (let i = 0; i < strNum.length; i++) {
      const int = parseInt(strNum.at(i))
      sum += Math.pow(int, 2)
    }

    if (set.has(sum)) return false
    if (sum !== 1) set.add(sum)
  }
  return true
}

console.log(solution(68))

module.exports = solution;