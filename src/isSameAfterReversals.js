/**
 * @description 2119
 * 1. 주어진 정수 num 을 반전시킨다.
 * 2. 반전시킨 정수 앞에 0은 올 수 없으므로 0은 유지되지 않는다.
 * 3. 0을 제외한 정수를 다시 반전시켜서 기존 정수 num과 같은지 판별한다.
 * @param {number} num
 * @return {boolean}
 */
function solution(num) {
  const str = num.toString();
  const lastChar = str[str.length - 1];

  return num === 0 ? true : lastChar !== '0' ? true : false;
}

function betterSolution(num) {
  return num === 0 ? true : num % 10 ? true : false;
}

module.exports = {
  solution,
  betterSolution
}