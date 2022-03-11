/**
 * @description Leetcode 2032
 * 주어진 세 배열에서 적어도 2개 이상 포함되어 있는 값들을 순서 상관없이 배열을 반환하라
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
function solution(nums1, nums2, nums3) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const set3 = new Set(nums3)
  const map = new Map();
  const result = [];

  const merged = [...set1, ...set2, ...set3];

  for (const val of merged) {
    const key = val.toString();
    map.set(key, (map.get(key) || 0) + 1);
    if (map.get(key) === 2) result.push(parseInt(key));
  }

  return result;
}

module.exports = solution;