/**
 * @description Leetcode
 * 주어진 배열 words 중에 단어를 거꾸로 읽어도 되는 첫번째 단어 찾기
 * @param {string[]} words
 * @return {string}
 */
function solution(words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word === word.split('').reverse().join('')) return word;
  }
  return '';
}

module.exports = solution;