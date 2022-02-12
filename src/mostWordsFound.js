/**
 * @description
 * @param {string[]} sentences
 * @return {number}
 */
function solution(sentences) {
  return Math.max(...sentences.map(sentence => sentence.split(' ').length));
}

module.exports = solution;