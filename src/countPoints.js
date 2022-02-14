/**
 * @description Leetcode 2103
 * RGB 컬러를 전부 가지고 있는 막대의 수를 구하라.
 * @param {string} rings
 * @return {number}
 */
function solution(rings) {
  const set = new Set();
  const map = new Map();
  let count = 0;

  for (let i = 0; i < rings.length / 2; i++) {
    set.add(rings.substring(2 * i, 2 * i + 2));
  }

  set.forEach(value => {
    const rgb = map.get(value[1]);
    map.set(value[1], !rgb ? value[0] : rgb + value[0]);
  });

  for (const value of map.values()) {
    const sorted = value.split('').sort().join('');
  
    if (sorted === 'BGR') count++;
  }

  return count;
}

function betterSolution(rings) {
  const rods = Array(10).fill('');
  
  for (let i = 0; i < rings.length; i+= 2) {
    const idx = rings[i + 1];
    if (rods[idx].indexOf(rings[i]) < 0) rods[idx] += rings[i];
  }

  return rods.filter(rod => rod.length > 2).length;
}

module.exports = {
  solution,
  betterSolution
};
