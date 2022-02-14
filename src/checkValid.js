/**
 * @description Leetcode 2133
 * n * n 의 모든 행과 열에 1부터 n까지의 모든 정수가 포함되어야한다.
 * @param {number[][]} matrix
 * @return {boolean}
 */
function solution(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const row = new Set();
    const col = new Set();
    for (let j = 0; j < matrix.length; j++) {
      let rowNum = matrix[i][j];
      let colNum = matrix[j][i];

      if (row.has(rowNum) || col.has(colNum)) return false;      

      row.add(rowNum);
      col.add(colNum);
    }
  } 

  return true;
}

module.exports = solution;
