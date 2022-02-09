/**
 * @description 해커랭크
 * 구불구불한 배열 만들기
 * @param {number[]} arr
 * @returns {number[]}
 */
function solution(arr) {
  let flag = true;
  let firstIdx = 0;
  let lastIdx = arr.length - 1;

  return arr.sort((a, b) => a - b).reduce((acc, curr, idx, arr) => {
    if (flag) {
      acc.push(arr[lastIdx--]);
    } else {
      acc.push(arr[firstIdx++]);
    }

    flag = !flag;

    return acc;
  }, []);
}

module.exports = solution;