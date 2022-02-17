/**
 * @description Leetcode 2094
 * 주어진 배열안의 숫자를 조합해서 3자리의 짝수를 만들고 오름차순으로 정렬하기
 * @param {number[]} digits
 * @return {number[]}
 */
function solution(digits) {
  const set = new Set();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue;
    for (let j = 0; j < digits.length; j++) {
      if (i === j) continue;
      for (let k = 0; k < digits.length; k++) {
        if (j === k || k === i || digits[k] % 2 !== 0) continue;
        const even = digits[i] * 100 + digits[j] * 10 + digits[k];
        set.add(even);
      }
    }
  }

  return [...set].sort();
}

module.exports = solution;