/**
 * @description Leetcode 88
 * nums1 배열 제자리에서 nums2와 머지된 결과를 반환하라.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function solution(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m)
  nums2.splice(n, nums2.lenght - n)
  nums1.push(...nums2)
  let size = 0

  while (size < m + n) {
    for (let i = 0; i < nums1.length - 1; i++) {
      let temp
  
      if (nums1[i] > nums1[i + 1]) {
        temp = nums1[i]
        nums1[i] = nums1[i+1]
        nums1[i+1] = temp
      }
    }
    size++
  }

  return nums1 // test 코드용
}

module.exports = solution;