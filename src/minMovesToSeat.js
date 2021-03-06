/**
 * @description Leetcode 2037
 * 모든 사람들이 좌석을 옮기는 횟수의 최소값을 구하라
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function solution(seats, students) {
  const sortedSeats = seats.sort((a, b) => a - b);

  return students.sort((a, b) => a - b).reduce((acc, curr, idx) => {
    
    return acc += Math.abs(sortedSeats[idx] - curr);
  }, 0);
}

module.exports = solution;