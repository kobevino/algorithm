/**
 * @description Leetcode
 * 단어의 길이가 1 혹은 2 라면 소문자로 변경, 나머지는 전부 대문자로 변경
 * @param {string} title
 * @return {string}
 */
function solution(title) {
  return title
    .toLowerCase()
    .split(' ')
    .map(word => 
      word.length > 2 
      ? word.charAt(0).toUpperCase() + word.slice(1) 
      : word
    )
    .join(' ');
}

module.exports = solution;