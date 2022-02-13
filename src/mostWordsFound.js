/**
 * @description Leetcode
 * 주어진 배열안에 있는 문장들중에 단어 갯수의 최대값을 구하기.
 * @param {string[]} sentences
 * @return {number}
 */
function solution(sentences) {
  return Math.max(...sentences.map(sentence => sentence.split(' ').length));
}

module.exports = solution;