/**
 * @description Leetcode 2073
 * 티켓당 1초 걸리는 k번째 티켓이 다 팔렸을 때 걸리는 시간 구하기
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function solution(tickets, k) {
  let maxTime = Math.max(...tickets);
  let time = 0;

  while (maxTime > 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] === 0) continue;
      tickets[i] -= 1;
      time++;
      if (tickets[k] === 0) return time;
      
    }
    
    maxTime--;
  }

  return time;
}

module.exports = solution;