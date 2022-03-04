/**
 * @description Leetcode 2047
 * 주어진 문장에서 유효한 단어 갯수 찾기
 * 1. 단어에 숫자 포함 될 수 없음
 * 2. 구두점은 단어끝 부분 이전에는 포함될 수 없음.
 * 3. hyphen 사이에는 단어가 있어야하며 단어에 최대 한번만 사용 가능.
 * @param {string} sentence
 * @return {number}
 */
function solution(sentence) {  
  const words = sentence.split(' ');
  let count = 0;
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isHyphen = false;

    for (let j = 0; j < word.length; j++) {
      const char = word[j];

      if (!isNaN(char)) break; // 숫자이면 제외

      if (j < word.length - 1 && ~'.,!'.indexOf(char)) break; // punctuation이 단어끝 이전에 포함되면 제외
      
      if (char === '-') {
        if (isHyphen) break; // hyphen 최대 한개 넘어가면 제외
        if (~'.,!-'.indexOf(word[j+1])) break; // hyphen 다음에 오는 문자열에 puntuation 및 hyphen 이면 제외
        if (j === 0 || j === word.length - 1) break; // 단어 앞뒤 문자열에 hyphen 오면 제외
        isHyphen = true;
      }

      if (j === word.length - 1) count++;
    }
  }
  
  return count;
}

module.exports = solution;